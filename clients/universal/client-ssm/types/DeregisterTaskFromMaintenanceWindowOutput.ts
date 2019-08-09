import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeregisterTaskFromMaintenanceWindowOutput shape
 */
export interface DeregisterTaskFromMaintenanceWindowOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the maintenance window the task was removed from.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the task removed from the maintenance window.</p>
   */
  WindowTaskId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
