import { _UnmarshalledTarget } from "./_Target";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateMaintenanceWindowTargetOutput shape
 */
export interface UpdateMaintenanceWindowTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The maintenance window ID specified in the update request.</p>
   */
  WindowId?: string;

  /**
   * <p>The target ID specified in the update request.</p>
   */
  WindowTargetId?: string;

  /**
   * <p>The updated targets.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The updated owner.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The updated name.</p>
   */
  Name?: string;

  /**
   * <p>The updated description.</p>
   */
  Description?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
