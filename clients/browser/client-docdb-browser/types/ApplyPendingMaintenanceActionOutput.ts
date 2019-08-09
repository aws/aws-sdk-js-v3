import { _UnmarshalledResourcePendingMaintenanceActions } from "./_ResourcePendingMaintenanceActions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ApplyPendingMaintenanceActionOutput shape
 */
export interface ApplyPendingMaintenanceActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.</p>
   */
  ResourcePendingMaintenanceActions?: _UnmarshalledResourcePendingMaintenanceActions;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
