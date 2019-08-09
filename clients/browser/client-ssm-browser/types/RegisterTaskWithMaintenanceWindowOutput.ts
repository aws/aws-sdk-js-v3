import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterTaskWithMaintenanceWindowOutput shape
 */
export interface RegisterTaskWithMaintenanceWindowOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the task in the maintenance window.</p>
   */
  WindowTaskId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
