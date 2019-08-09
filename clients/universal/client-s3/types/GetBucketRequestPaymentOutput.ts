import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketRequestPaymentOutput shape
 */
export interface GetBucketRequestPaymentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer?: "Requester" | "BucketOwner" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
