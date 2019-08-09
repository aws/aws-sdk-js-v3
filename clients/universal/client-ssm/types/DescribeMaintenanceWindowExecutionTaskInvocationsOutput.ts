import { _UnmarshalledMaintenanceWindowExecutionTaskInvocationIdentity } from "./_MaintenanceWindowExecutionTaskInvocationIdentity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowExecutionTaskInvocationsOutput shape
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the task invocation results per invocation.</p>
   */
  WindowExecutionTaskInvocationIdentities?: Array<
    _UnmarshalledMaintenanceWindowExecutionTaskInvocationIdentity
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
