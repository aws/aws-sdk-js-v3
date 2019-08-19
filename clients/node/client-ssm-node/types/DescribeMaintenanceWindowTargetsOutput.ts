import { _UnmarshalledMaintenanceWindowTarget } from "./_MaintenanceWindowTarget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowTargetsOutput shape
 */
export interface DescribeMaintenanceWindowTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the targets in the maintenance window.</p>
   */
  Targets?: Array<_UnmarshalledMaintenanceWindowTarget>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
