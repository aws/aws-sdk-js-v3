import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteActionTargetOutput shape
 */
export interface DeleteActionTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the custom action target that was deleted.</p>
   */
  ActionTargetArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
