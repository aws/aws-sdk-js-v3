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

const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const SHA256_HEADER = "X-Amz-Content-Sha256";

export class S3RequestPresigner implements RequestPresigner {
  private readonly signer: SignatureV4;
  constructor({
    service = "s3",
    uriEscapePath = false,
    ...rest
  }: SignatureV4Init & SignatureV4CryptoInit) {
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
