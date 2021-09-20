import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import type { CrtSignerV4, CrtSignerV4Init } from "@aws-sdk/signature-v4-crt";
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
  private sigv4aSigner?: CrtSignerV4;
  private readonly signerOptions: S3SignerV4Init;

  constructor(options: S3SignerV4Init) {
    this.sigv4Signer = new SignatureV4(options);
    this.signerOptions = options;
  }

  public async sign(requestToSign: HttpRequest, options: RequestSigningArguments = {}): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return (await this.getSigv4aSigner()).sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }

  public async presign(originalRequest: HttpRequest, options: RequestPresigningArguments = {}): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return (await this.getSigv4aSigner()).presign(originalRequest, options);
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }

  private async getSigv4aSigner(): Promise<CrtSignerV4> {
    if (!this.sigv4aSigner) {
      let CrtSignerV4: new (options: CrtSignerV4Init & SignatureV4CryptoInit) => CrtSignerV4;
      try {
        CrtSignerV4 = (await import("@aws-sdk/signature-v4-crt")).CrtSignerV4;
      } catch (e) {
        e.message =
          `${e.message}\nPlease check if you have installed "@aws-sdk/signature-v4-crt" package explicitly. \n` +
          "For more information please go to https://github.com/aws/aws-sdk-js-v3#known-issues";
        throw e;
      }
      this.sigv4aSigner = new CrtSignerV4({
        ...this.signerOptions,
        signingAlgorithm: 1,
      });
    }
    return this.sigv4aSigner;
  }
}
