import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeregisterTargetFromMaintenanceWindowOutput shape
 */
export interface DeregisterTargetFromMaintenanceWindowOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the maintenance window the target was removed from.</p>
   */
  WindowId?: string;

  /**
   * <p>The ID of the removed target definition.</p>
   */
  WindowTargetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
