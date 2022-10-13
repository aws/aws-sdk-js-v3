import { getPresignedUrl as moved } from "@aws-sdk/s3-signer";

/**
 * @deprecated use getPresignedUrl from @aws-sdk/s3-signer
 */
export const getSignedUrl = moved;
