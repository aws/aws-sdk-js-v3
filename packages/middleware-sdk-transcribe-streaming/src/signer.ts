import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 as BaseSignatureV4 } from "@aws-sdk/signature-v4";
import {
  HttpRequest as IHttpRequest,
  RequestPresigner,
  RequestPresigningArguments,
  RequestSigner,
  RequestSigningArguments,
} from "@aws-sdk/types";

export class SignatureV4 implements RequestSigner, RequestPresigner {
  private readonly signer: BaseSignatureV4;
  constructor(options: { signer: BaseSignatureV4 }) {
    this.signer = options.signer;
  }

  public presign(originalRequest: IHttpRequest, options: RequestPresigningArguments = {}): Promise<IHttpRequest> {
    return this.signer.presign(originalRequest, options);
  }

  public async sign(toSign: IHttpRequest, options?: RequestSigningArguments): Promise<IHttpRequest> {
    if (HttpRequest.isInstance(toSign)) {
      // Presign the endpoint url with empty body, otherwise
      // the payload hash would be UNSINGED-PAYLOAD
      const signedRequest = await this.signer.presign(
        { ...toSign, body: "" },
        {
          // presigned url must be expired within 5 mins.
          expiresIn: 5 * 60,
          // Not to sign headers. Transcribe-streaming WebSocket
          // request omits headers except for required 'host' header. If we sign
          // the other headers, the signature could be mismatch.
          unsignableHeaders: new Set(Object.keys(toSign.headers).filter((header) => header !== "host")),
        }
      );
      return {
        ...signedRequest,
        body: toSign.body,
      };
    } else {
      return this.signer.sign(toSign, options);
    }
  }
}
