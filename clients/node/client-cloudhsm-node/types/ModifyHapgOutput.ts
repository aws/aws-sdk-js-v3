import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyHapgOutput shape
 */
export interface ModifyHapgOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
