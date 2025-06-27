import { SignatureV4MultiRegion, SignatureV4MultiRegionInit } from "@aws-sdk/signature-v4-multi-region";
import { AwsCredentialIdentity, RequestPresigner, RequestPresigningArguments } from "@smithy/types";
import { HttpRequest as IHttpRequest } from "@smithy/types";

import { SHA256_HEADER, UNSIGNED_PAYLOAD } from "./constants";

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type S3RequestPresignerOptions = PartialBy<SignatureV4MultiRegionInit, "service" | "uriEscapePath"> & {
  signingName?: string;
};

export class S3RequestPresigner implements RequestPresigner {
  private readonly signer: SignatureV4MultiRegion;
  constructor(options: S3RequestPresignerOptions) {
    const resolvedOptions = {
      // Allow `signingName` because we want to support usecase of supply client's resolved config
      // directly. Where service equals signingName.
      service: options.signingName || options.service || "s3",
      uriEscapePath: options.uriEscapePath || false,
      applyChecksum: options.applyChecksum || false,
      ...options,
    };
    this.signer = new SignatureV4MultiRegion(resolvedOptions);
  }

  public presign(
    requestToSign: IHttpRequest,
    {
      unsignableHeaders = new Set(),
      hoistableHeaders = new Set(),
      unhoistableHeaders = new Set(),
      ...options
    }: RequestPresigningArguments = {}
  ): Promise<IHttpRequest> {
    this.prepareRequest(requestToSign, {
      unsignableHeaders,
      unhoistableHeaders,
      hoistableHeaders,
    });
    return this.signer.presign(requestToSign, {
      expiresIn: 900,
      unsignableHeaders,
      unhoistableHeaders,
      ...options,
    });
  }

  public presignWithCredentials(
    requestToSign: IHttpRequest,
    credentials: AwsCredentialIdentity,
    {
      unsignableHeaders = new Set(),
      hoistableHeaders = new Set(),
      unhoistableHeaders = new Set(),
      ...options
    }: RequestPresigningArguments = {}
  ): Promise<IHttpRequest> {
    this.prepareRequest(requestToSign, {
      unsignableHeaders,
      unhoistableHeaders,
      hoistableHeaders,
    });
    return this.signer.presignWithCredentials(requestToSign, credentials, {
      expiresIn: 900,
      unsignableHeaders,
      unhoistableHeaders,
      ...options,
    });
  }

  private prepareRequest(
    requestToSign: IHttpRequest,
    {
      unsignableHeaders = new Set(),
      unhoistableHeaders = new Set(),
      hoistableHeaders = new Set(),
    }: RequestPresigningArguments = {}
  ) {
    unsignableHeaders.add("content-type");

    Object.keys(requestToSign.headers)
      .map((header) => header.toLowerCase())
      .filter((header) => header.startsWith("x-amz-server-side-encryption"))
      .forEach((header) => {
        if (!hoistableHeaders.has(header)) {
          /**
           * For smoother backwards compatibility with pre-GA PR
           * https://github.com/aws/aws-sdk-js-v3/issues/1576,
           * x-amz-sse headers are by default unhoisted,
           * but can be overridden.
           */
          unhoistableHeaders.add(header);
        }
      });

    requestToSign.headers[SHA256_HEADER] = UNSIGNED_PAYLOAD;

    const currentHostHeader = requestToSign.headers.host;
    const port = requestToSign.port;
    const expectedHostHeader = `${requestToSign.hostname}${requestToSign.port != null ? ":" + port : ""}`;
    if (!currentHostHeader || (currentHostHeader === requestToSign.hostname && requestToSign.port != null)) {
      requestToSign.headers.host = expectedHostHeader;
    }
  }
}
