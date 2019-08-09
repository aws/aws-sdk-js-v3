import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CancelMaintenanceWindowExecutionOutput shape
 */
export interface CancelMaintenanceWindowExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the maintenance window execution that has been stopped.</p>
   */
  WindowExecutionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
