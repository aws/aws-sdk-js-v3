import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketAccelerateConfigurationOutput shape
 */
export interface GetBucketAccelerateConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The accelerate configuration of the bucket.</p>
   */
  Status?: "Enabled" | "Suspended" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
