import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketVersioningOutput shape
 */
export interface GetBucketVersioningOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The versioning state of the bucket.</p>
   */
  Status?: "Enabled" | "Suspended" | string;

  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.</p>
   */
  MFADelete?: "Enabled" | "Disabled" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
