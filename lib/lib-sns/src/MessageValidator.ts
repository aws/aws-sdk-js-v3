import { createVerify } from "node:crypto";

import { CertificateCache, type CertificateFetcher } from "./certificate";
import {
  DEFAULT_CERTIFICATE_TIMEOUT_MS,
  DEFAULT_ENCODING,
  DEFAULT_HOST_PATTERN,
  LAMBDA_MESSAGE_KEYS,
  REQUIRED_KEYS,
  SIGNABLE_KEYS_BY_TYPE,
  SUPPORTED_MESSAGE_TYPES,
} from "./constants";
import { SNSValidationError } from "./errors";
import type { MessageValidatorOptions, SNSMessage, SNSMessageType, ValidationCallback } from "./types";

/**
 * Validates that an inbound HTTP(S) POST is a genuine Amazon SNS message by
 * checking its signature against the signing certificate SNS advertises.
 *
 * Node-only: signature verification relies on `node:crypto`.
 *
 * @example
 * ```typescript
 * const validator = new MessageValidator();
 * const message = await validator.validate(JSON.parse(body));
 * ```
 *
 * @public
 */
export class MessageValidator {
  /** Encoding of the signed message fields. Settable for legacy compatibility. */
  public encoding: BufferEncoding;

  private readonly _hostPattern: RegExp;
  private readonly _certificates: CertificateCache;

  /**
   * @param options - Host pattern, encoding, and (internal) certificate fetcher.
   *   A `RegExp` is also accepted for drop-in compatibility with the
   *   legacy `sns-validator` constructor.
   */
  public constructor(
    options: MessageValidatorOptions | RegExp = {},
    encoding?: BufferEncoding,
    certificateFetcher?: CertificateFetcher
  ) {
    const opts: MessageValidatorOptions = options instanceof RegExp ? { hostPattern: options, encoding } : options;

    this._hostPattern = opts.hostPattern ?? DEFAULT_HOST_PATTERN;
    this.encoding = opts.encoding ?? encoding ?? DEFAULT_ENCODING;
    this._certificates = new CertificateCache(
      certificateFetcher,
      opts.certificateTimeoutMs ?? DEFAULT_CERTIFICATE_TIMEOUT_MS
    );
  }

  /**
   * Validates a message's signature.
   *
   * Pass a `cb` for the legacy Node-callback form. Omit it to get a Promise
   * that resolves with the validated message or rejects with the reason.
   *
   * @param hash - The SNS message, either a parsed object or a raw JSON string.
   * @param cb - Optional Node-style callback.
   */
  public validate(hash: SNSMessage | string): Promise<SNSMessage>;
  public validate(hash: SNSMessage | string, cb: ValidationCallback): void;
  public validate(hash: SNSMessage | string, cb?: ValidationCallback): Promise<SNSMessage> | void {
    const promise = this._validate(hash);
    if (!cb) {
      return promise;
    }
    promise.then(
      (message) => cb(null, message),
      (error) => cb(error as Error)
    );
  }

  private async _validate(hash: SNSMessage | string): Promise<SNSMessage> {
    let message: SNSMessage;
    if (typeof hash === "string") {
      try {
        message = JSON.parse(hash) as SNSMessage;
      } catch (e) {
        throw new SNSValidationError("Unexpected error while parsing the message.", { cause: e });
      }
    } else {
      message = hash;
    }

    if (typeof message !== "object" || message === null || Array.isArray(message)) {
      throw new SNSValidationError("The message must be a JSON object.");
    }

    message = convertLambdaMessage(message);

    if (!("Type" in message)) {
      throw new SNSValidationError("Message missing required keys.");
    }

    if (!SUPPORTED_MESSAGE_TYPES.includes(message.Type as SNSMessageType)) {
      throw new SNSValidationError("The message Type is not supported.");
    }

    if (!validateMessageStructure(message)) {
      throw new SNSValidationError("Message missing required keys.");
    }

    const nonStringField = findNonStringSignedValue(message);
    if (nonStringField !== null) {
      throw new SNSValidationError(`The message field "${nonStringField}" must be a string.`);
    }

    const fieldWithNewline = validateSignedValues(message);
    if (fieldWithNewline !== null) {
      throw new SNSValidationError(`The message field "${fieldWithNewline}" must not contain newlines.`);
    }

    if (!validateUrl(message.SigningCertURL, this._hostPattern)) {
      throw new SNSValidationError("The certificate is located on an invalid domain.");
    }

    await this._validateSignature(message);
    return message;
  }

  private async _validateSignature(message: SNSMessage): Promise<void> {
    const signatureVersion = message.SignatureVersion;
    if (signatureVersion !== "1" && signatureVersion !== "2") {
      throw new SNSValidationError(`The signature version ${signatureVersion} is not supported.`);
    }

    const algorithm = signatureVersion === "1" ? "RSA-SHA1" : "RSA-SHA256";
    const verifier = createVerify(algorithm);
    const signableKeys = SIGNABLE_KEYS_BY_TYPE[message.Type as SNSMessageType];
    for (const key of signableKeys) {
      if (key in message) {
        verifier.update(`${key}\n${message[key] as string}\n`, this.encoding);
      }
    }

    const certificate = await this._certificates.get(message.SigningCertURL!);
    let verified: boolean;
    try {
      verified = verifier.verify(certificate, message.Signature!, "base64");
    } catch (e) {
      throw new SNSValidationError("Unexpected error while verifying the message signature.", { cause: e });
    }
    if (!verified) {
      throw new SNSValidationError("The message signature is invalid.");
    }
  }
}

/**
 * Rewrites Lambda's lowercase "Url" field names to the canonical "URL" names,
 * and drops a null Subject so it is not treated as present.
 */
function convertLambdaMessage(message: SNSMessage): SNSMessage {
  for (const key of Object.keys(LAMBDA_MESSAGE_KEYS)) {
    if (key in message) {
      message[LAMBDA_MESSAGE_KEYS[key]] = message[key];
    }
  }
  if ("Subject" in message && message.Subject === null) {
    delete message.Subject;
  }
  return message;
}

function validateMessageStructure(message: SNSMessage): boolean {
  for (const key of REQUIRED_KEYS) {
    if (!(key in message)) {
      return false;
    }
  }
  const signableKeys = SIGNABLE_KEYS_BY_TYPE[message.Type as SNSMessageType];
  for (const key of signableKeys) {
    // Subject is optional on notifications.
    if (key !== "Subject" && !(key in message)) {
      return false;
    }
  }
  return true;
}

/**
 * Returns the first signed field (other than Message/Subject) containing a
 * newline, or null. SNS does not allow newlines in these fields.
 */
function validateSignedValues(message: SNSMessage): string | null {
  const signableKeys = SIGNABLE_KEYS_BY_TYPE[message.Type as SNSMessageType];
  for (const key of signableKeys) {
    if (key in message && key !== "Message" && key !== "Subject" && /[\r\n]/.test(message[key] as string)) {
      return key;
    }
  }
  return null;
}

function findNonStringSignedValue(message: SNSMessage): string | null {
  const signableKeys = SIGNABLE_KEYS_BY_TYPE[message.Type as SNSMessageType];
  for (const key of signableKeys) {
    if (key in message && typeof message[key] !== "string") {
      return key;
    }
  }
  return null;
}

function validateUrl(urlToValidate: string | undefined, hostPattern: RegExp): boolean {
  if (!urlToValidate) {
    return false;
  }
  let parsed: URL;
  try {
    parsed = new URL(urlToValidate);
  } catch {
    return false;
  }
  return (
    parsed.protocol === "https:" &&
    !parsed.username &&
    !parsed.password &&
    !parsed.search &&
    !parsed.hash &&
    parsed.pathname.endsWith(".pem") &&
    hostPattern.test(parsed.host)
  );
}
