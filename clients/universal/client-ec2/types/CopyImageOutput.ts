import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CopyImage.</p>
 */
export interface CopyImageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
