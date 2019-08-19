import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartOnDemandAuditTaskOutput shape
 */
export interface StartOnDemandAuditTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the on-demand audit you started.</p>
   */
  taskId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
