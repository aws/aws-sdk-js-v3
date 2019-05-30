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
import { HttpRequest } from "@aws-sdk/types";
import { UNSIGNED_PAYLOAD, SHA256_HEADER } from "./constants";

/**
 * PartialBy<T, K> makes properties specified in K optional in interface T
 * see: https://stackoverflow.com/questions/43159887/make-a-single-property-optional-in-typescript
 * */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export class S3RequestPresigner implements RequestPresigner {
  private readonly signer: SignatureV4;
  constructor({
    service = "s3",
    uriEscapePath = false,
    ...rest
  }: PartialBy<
    SignatureV4Init & SignatureV4CryptoInit,
    "service" | "uriEscapePath"
  >) {
    this.signer = new SignatureV4({
      uriEscapePath,
      service,
      ...rest
    });
  }

  public async presignRequest<StreamType>(
    requestToSign: HttpRequest<StreamType>,
    expiration: DateInput,
    options?: RequestSigningArguments
  ): Promise<HttpRequest<StreamType>> {
    requestToSign.headers[SHA256_HEADER] = UNSIGNED_PAYLOAD;
    return this.signer.presignRequest(requestToSign, expiration, options);
  }
}
