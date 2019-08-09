import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartAuditMitigationActionsTaskOutput shape
 */
export interface StartAuditMitigationActionsTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   */
  taskId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
