import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { CrtSignerV4 } from "@aws-sdk/signature-v4-crt";
import {
  HttpRequest,
  RequestPresigner,
  RequestPresigningArguments,
  RequestSigner,
  RequestSigningArguments,
} from "@aws-sdk/types";

export type S3SignerV4Init = SignatureV4Init &
  SignatureV4CryptoInit & {
    runtime?: string;
  };

/**
 * A SigV4-compatible signer for S3 service. In order to support SigV4a algorithm according to the operation input
 * dynamically, the signer wraps native module SigV4a signer and JS SigV4 signer. It signs the request with SigV4a
 * algorithm if the request needs to be signed with `*` region. Otherwise, it signs the request with normal SigV4
 * signer.
 * Note that SigV4a signer is only supported in Node.js now because it depends on a native dependency.
 * @private
 */
export class S3SignatureV4 implements RequestPresigner, RequestSigner {
  private readonly sigv4Signer: SignatureV4;
  private readonly sigv4aSigner?: CrtSignerV4;

  constructor(options: S3SignerV4Init) {
    this.sigv4Signer = new SignatureV4(options);
    if (options.runtime === "node") {
      this.sigv4aSigner = new CrtSignerV4({ ...options, signingAlgorithm: 1 });
    }
  }

  public async sign(requestToSign: HttpRequest, options: RequestSigningArguments = {}): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      if (!this.sigv4aSigner)
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.sigv4aSigner.sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }

  public async presign(originalRequest: HttpRequest, options: RequestPresigningArguments = {}): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      if (!this.sigv4aSigner)
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.sigv4aSigner.presign(originalRequest, options);
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
}
