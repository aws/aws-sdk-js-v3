import type { AwsCredentialIdentity, Logger } from "@smithy/types";

import { CREDENTIAL_DAEMON_DOC } from "./constants";
import { CredentialDaemonProviderError } from "./CredentialDaemonProviderError";
import { sanitize } from "./sanitize";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const RFC3339_UTC = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,9}))?Z$/;

/**
 * Parses an RFC 3339 UTC timestamp with up to 9 fractional digits, truncated to milliseconds.
 * Returns undefined when the value is not one.
 * @internal
 */
export const parseRfc3339Utc = (value: string): Date | undefined => {
  const match = RFC3339_UTC.exec(value);
  if (!match) {
    return undefined;
  }
  const [, year, month, day, hour, minute, second, fraction = ""] = match;
  const [y, mo, d, h, mi, s] = [year, month, day, hour, minute, second].map(Number);
  const ms = Number(fraction.slice(0, 3).padEnd(3, "0"));
  if (s > 59) {
    return undefined;
  }
  const date = new Date(Date.UTC(y, mo - 1, d, h, mi, s, ms));
  if (
    date.getUTCFullYear() !== y ||
    date.getUTCMonth() !== mo - 1 ||
    date.getUTCDate() !== d ||
    date.getUTCHours() !== h ||
    date.getUTCMinutes() !== mi ||
    date.getUTCSeconds() !== s
  ) {
    return undefined;
  }
  return date;
};

/**
 * Validates the parsed JSON-RPC reply from the credential daemon and maps it to credentials.
 * @internal
 */
export const parseCredentialDaemonReply = (
  reply: unknown,
  credential: string,
  logger?: Logger
): AwsCredentialIdentity => {
  const protocolError = (reason: string) =>
    new CredentialDaemonProviderError(
      `The credential daemon sent an invalid reply for credential '${credential}': ${reason}.`,
      "PROTOCOL_ERROR",
      { logger }
    );

  if (!isObject(reply)) {
    throw protocolError("reply is not a JSON object");
  }
  if (reply.jsonrpc !== "2.0") {
    throw protocolError("jsonrpc is not '2.0'");
  }
  // result and error count only as the reply's own properties, not inherited ones, and null counts as absent.
  const hasResult = Object.hasOwn(reply, "result") && reply.result != null;
  const hasError = Object.hasOwn(reply, "error") && reply.error != null;
  if (hasResult === hasError) {
    throw protocolError("reply must have exactly one of result or error");
  }

  if (hasError) {
    const { error } = reply;
    if (!isObject(error)) {
      throw protocolError("error is not an object");
    }
    const daemonMessage = typeof error.message === "string" ? sanitize(error.message) : "";
    const suffix = daemonMessage ? ` The credential daemon said: ${daemonMessage}` : "";
    const dataCode = isObject(error.data) ? error.data.code : undefined;
    if (dataCode === "REAUTH_REQUIRED") {
      throw new CredentialDaemonProviderError(
        `The credential daemon needs you to sign in again for credential '${credential}'; ` +
          `sign in again, see ${CREDENTIAL_DAEMON_DOC}.${suffix}`,
        "REAUTH_REQUIRED",
        { logger }
      );
    }
    if (dataCode === "CREDENTIAL_NOT_FOUND") {
      throw new CredentialDaemonProviderError(
        `The credential daemon has no credential named '${credential}' for this user; ` +
          `sign in again, see ${CREDENTIAL_DAEMON_DOC}.${suffix}`,
        "CREDENTIAL_NOT_FOUND",
        { logger }
      );
    }
    const codeText = typeof dataCode === "string" ? ` (${sanitize(dataCode)})` : "";
    throw new CredentialDaemonProviderError(
      `The credential daemon rejected the request for credential '${credential}'${codeText}.${suffix}`,
      "REQUEST_REJECTED",
      { logger }
    );
  }

  const { result } = reply;
  if (!isObject(result)) {
    throw protocolError("result is not an object");
  }
  const { material } = result;
  if (!isObject(material)) {
    throw protocolError("result.material is not an object");
  }
  if (typeof material.type !== "string" || material.type === "") {
    throw protocolError("result.material.type is not a non-empty string");
  }
  if (material.type !== "session_credentials") {
    throw new CredentialDaemonProviderError(
      `The credential daemon returned unsupported credential material type '${sanitize(material.type)}' ` +
        `for credential '${credential}'; update the AWS SDK.`,
      "UNSUPPORTED_MATERIAL",
      { logger }
    );
  }

  const required = (value: unknown, field: string): string => {
    if (typeof value !== "string" || value === "") {
      throw protocolError(`${field} is not a non-empty string`);
    }
    return value;
  };
  const optional = (value: unknown, field: string): string | undefined => {
    if (value === undefined || value === null || value === "") {
      return undefined;
    }
    if (typeof value !== "string") {
      throw protocolError(`${field} is not a string`);
    }
    return value;
  };

  const accessKeyId = required(material.access_key_id, "result.material.access_key_id");
  const secretAccessKey = required(material.secret_access_key, "result.material.secret_access_key");
  const sessionToken = optional(material.session_token, "result.material.session_token");
  const accountId = optional(material.account_id, "result.material.account_id");
  const expiresAt = required(result.expires_at, "result.expires_at");
  const expiration = parseRfc3339Utc(expiresAt);
  if (!expiration) {
    throw protocolError("result.expires_at is not an RFC 3339 UTC timestamp");
  }

  return {
    accessKeyId,
    secretAccessKey,
    ...(sessionToken && { sessionToken }),
    ...(accountId && { accountId }),
    expiration,
  };
};
