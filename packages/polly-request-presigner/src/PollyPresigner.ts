import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { RequestPresigner, RequestPresigningArguments } from "@aws-sdk/types";
import { HttpRequest as IHttpRequest } from "@aws-sdk/types";

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type PollyPresignerOptions = PartialBy<SignatureV4Init & SignatureV4CryptoInit, "service" | "uriEscapePath">;

export class PollyPresigner implements RequestPresigner {
  private readonly signer: SignatureV4;
  constructor(options: PollyPresignerOptions) {
    this.signer = new SignatureV4({
      service: options.service || "polly",
      uriEscapePath: options.uriEscapePath || false,
      ...options,
    });
  }

  public async presign(
    requestToSign: IHttpRequest,
    { unsignableHeaders = new Set(), ...options }: RequestPresigningArguments = {}
  ): Promise<IHttpRequest> {
    unsignableHeaders.add("content-type");
    return this.signer.presign(requestToSign, {
      expiresIn: 3600,
      unsignableHeaders,
      ...options,
    });
  }
}
