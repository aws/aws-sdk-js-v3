import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { RequestPresigner, RequestPresigningArguments } from "@aws-sdk/types";
import { HttpRequest as IHttpRequest } from "@aws-sdk/types";

import { SHA256_HEADER, UNSIGNED_PAYLOAD } from "./constants";

/**
 * PartialBy<T, K> makes properties specified in K optional in interface T
 * see: https://stackoverflow.com/questions/43159887/make-a-single-property-optional-in-typescript
 * */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type S3RequestPresignerOptions = PartialBy<
  SignatureV4Init & SignatureV4CryptoInit,
  "service" | "uriEscapePath"
> & { signingName?: string };

export class S3RequestPresigner implements RequestPresigner {
  private readonly signer: SignatureV4;
  constructor(options: S3RequestPresignerOptions) {
    const resolvedOptions = {
      // Allow `signingName` because we want to support usecase of supply client's resolved config
      // directly. Where service equals signingName.
      service: options.signingName || options.service || "s3",
      uriEscapePath: options.uriEscapePath || false,
      ...options,
    };
    this.signer = new SignatureV4(resolvedOptions);
  }

  public async presign(
    requestToSign: IHttpRequest,
    { unsignableHeaders = new Set(), ...options }: RequestPresigningArguments = {}
  ): Promise<IHttpRequest> {
    unsignableHeaders.add("content-type");
    requestToSign.headers[SHA256_HEADER] = UNSIGNED_PAYLOAD;
    return this.signer.presign(requestToSign, {
      expiresIn: 900,
      unsignableHeaders,
      ...options,
    });
  }
}
