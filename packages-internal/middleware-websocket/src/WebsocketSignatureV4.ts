import { HttpRequest } from "@smithy/protocol-http";
import type { SignatureV4 as BaseSignatureV4 } from "@smithy/signature-v4";
import type {
  EventSigner,
  EventSigningArguments,
  FormattedEvent,
  HttpRequest as IHttpRequest,
  MessageSigner,
  RequestPresigner,
  RequestPresigningArguments,
  RequestSigner,
  RequestSigningArguments,
  SignableMessage,
  SignedMessage,
  SigningArguments,
  StringSigner,
} from "@smithy/types";

import { isWebSocketRequest } from "./utils";

/**
 * Because this signer defers to sigv4, it implements all signing interfaces that
 * the sigv4 signer does, including message signing.
 *
 * @internal
 */
export class WebsocketSignatureV4 implements RequestPresigner, RequestSigner, StringSigner, EventSigner, MessageSigner {
  private readonly signer: BaseSignatureV4;
  constructor(options: { signer: BaseSignatureV4 }) {
    this.signer = options.signer;
  }

  public presign(originalRequest: IHttpRequest, options: RequestPresigningArguments = {}): Promise<IHttpRequest> {
    return this.signer.presign(originalRequest, options);
  }

  public sign(stringToSign: string, options?: SigningArguments): Promise<string>;
  public sign(event: FormattedEvent, options: EventSigningArguments): Promise<string>;
  public sign(event: SignableMessage, options: SigningArguments): Promise<SignedMessage>;
  public sign(requestToSign: IHttpRequest, options?: RequestSigningArguments): Promise<IHttpRequest>;
  public async sign(
    toSign: string | FormattedEvent | SignableMessage | IHttpRequest,
    options?: SigningArguments | EventSigningArguments | RequestSigningArguments
  ): Promise<string | SignedMessage | IHttpRequest> {
    if (HttpRequest.isInstance(toSign) && isWebSocketRequest(toSign)) {
      // Presign the endpoint url with empty body, otherwise
      // the payload hash would be UNSIGNED-PAYLOAD
      const signedRequest = await this.signer.presign(
        { ...toSign, body: "" },
        {
          ...options,
          // presigned url must be expired within 1 min.
          expiresIn: 60,
          // Not to sign headers. Transcribe-streaming WebSocket
          // request omits headers except for required 'host' header. If we sign
          // the other headers, the signature could mismatch.
          unsignableHeaders: new Set(Object.keys(toSign.headers).filter((header) => header !== "host")),
        }
      );
      return {
        ...signedRequest,
        body: toSign.body,
      };
    } else {
      return this.signer.sign(toSign as any, options);
    }
  }

  public signMessage(message: SignableMessage, args: SigningArguments): Promise<SignedMessage> {
    return this.signer.signMessage(message, args);
  }
}
