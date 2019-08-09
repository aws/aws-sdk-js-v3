import { _UnmarshalledMaintenanceWindowIdentityForTarget } from "./_MaintenanceWindowIdentityForTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowsForTargetOutput shape
 */
export interface DescribeMaintenanceWindowsForTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the maintenance window targets and tasks an instance is associated with.</p>
   */
  WindowIdentities?: Array<_UnmarshalledMaintenanceWindowIdentityForTarget>;

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
