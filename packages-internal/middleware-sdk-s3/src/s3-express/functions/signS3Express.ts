import type { AwsCredentialIdentity, HttpRequest as IHttpRequest } from "@smithy/types";

import { S3ExpressIdentity } from "../interfaces/S3ExpressIdentity";

export const signS3Express = async (
  s3ExpressIdentity: S3ExpressIdentity,
  signingOptions: {
    signingDate: Date;
    signingRegion: string;
    signingService: string;
  },
  request: IHttpRequest,
  sigV4MultiRegionSigner: {
    signWithCredentials(
      req: IHttpRequest,
      identity: AwsCredentialIdentity,
      opts?: Partial<typeof signingOptions>
    ): Promise<IHttpRequest>;
  }
) => {
  // the signer is expected to be SignatureV4MultiRegion for S3.
  const signedRequest = await sigV4MultiRegionSigner.signWithCredentials(request, s3ExpressIdentity, {});

  if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
    throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
  }

  return signedRequest;
};
