import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Results of a <a>CreateStorageLocationResult</a> call.</p>
 */
export interface CreateStorageLocationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the Amazon S3 bucket created.</p>
   */
  S3Bucket?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
