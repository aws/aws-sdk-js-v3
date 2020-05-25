import {
  RequestSigner,
  HttpRequest as IHttpRequest,
  RequestSigningArguments,
  RequestPresigner,
  RequestPresigningArguments
} from "@aws-sdk/types";
import { SignatureV4 as BaseSignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";

export class SignatureV4 implements RequestSigner, RequestPresigner {
  private readonly signer: BaseSignatureV4;
  constructor(options: { signer: BaseSignatureV4 }) {
    this.signer = options.signer;
  }

  public presign(
    originalRequest: IHttpRequest,
    options: RequestPresigningArguments = {}
  ): Promise<IHttpRequest> {
    return this.signer.presign(originalRequest, options);
  }

  public async sign(
    toSign: IHttpRequest,
    options?: RequestSigningArguments
  ): Promise<IHttpRequest> {
    if (HttpRequest.isInstance(toSign)) {
      // Presign the endpoint url with empty body, otherwise
      // the payload hash would be UNSINGED_PAYLOAD
      const originalBody = toSign.body;
      toSign.body = "";
      const signedRequest = await this.signer.presign(toSign, {
        expiresIn: 5 * 60 // presigned url must be expired within 5 mins
      } as any);
      signedRequest.body = originalBody;
      return signedRequest;
    } else {
      return this.signer.sign(toSign, options);
    }
  }
}
