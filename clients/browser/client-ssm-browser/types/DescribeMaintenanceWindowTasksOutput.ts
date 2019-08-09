import { _UnmarshalledMaintenanceWindowTask } from "./_MaintenanceWindowTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowTasksOutput shape
 */
export interface DescribeMaintenanceWindowTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the tasks in the maintenance window.</p>
   */
  Tasks?: Array<_UnmarshalledMaintenanceWindowTask>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
