import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateMitigationActionOutput shape
 */
export interface UpdateMitigationActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN for the new mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  actionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
