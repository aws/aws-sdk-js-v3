import { _UnmarshalledTask } from "./_Task";
import { _UnmarshalledFailure } from "./_Failure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTasksOutput shape
 */
export interface DescribeTasksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of tasks.</p>
   */
  tasks?: Array<_UnmarshalledTask>;

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Array<_UnmarshalledFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
