import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateLocationS3Response</p>
 */
export interface CreateLocationS3Output extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the source Amazon S3 bucket location that is created.</p>
   */
  LocationArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
