import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateMaintenanceWindowOutput shape
 */
export interface CreateMaintenanceWindowOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
