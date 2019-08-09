import { _UnmarshalledMaintenanceWindowExecutionTaskIdentity } from "./_MaintenanceWindowExecutionTaskIdentity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowExecutionTasksOutput shape
 */
export interface DescribeMaintenanceWindowExecutionTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the task executions.</p>
   */
  WindowExecutionTaskIdentities?: Array<
    _UnmarshalledMaintenanceWindowExecutionTaskIdentity
  >;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
