import {
  DateInput,
  RequestPresigner,
  RequestSigningArguments
} from "@aws-sdk/types";
import {
  SignatureV4,
  SignatureV4Init,
  SignatureV4CryptoInit
} from "@aws-sdk/signature-v4";
import { HttpRequest as IHttpRequest } from "@aws-sdk/types";
import { UNSIGNED_PAYLOAD, SHA256_HEADER } from "./constants";

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
      ...options
    };
    this.signer = new SignatureV4(resolvedOptions);
  }

  public async presignRequest(
    requestToSign: IHttpRequest,
    expiration: DateInput,
    { unsignableHeaders = new Set(), ...options }: RequestSigningArguments = {}
  ): Promise<IHttpRequest> {
    unsignableHeaders.add("content-type");
    requestToSign.headers[SHA256_HEADER] = UNSIGNED_PAYLOAD;
    return this.signer.presignRequest(requestToSign, expiration, {
      unsignableHeaders,
      ...options
    });
  }
}
