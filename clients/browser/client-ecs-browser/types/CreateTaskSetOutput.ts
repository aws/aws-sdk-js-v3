import { _UnmarshalledTaskSet } from "./_TaskSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTaskSetOutput shape
 */
export interface CreateTaskSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.</p>
   */
  taskSet?: _UnmarshalledTaskSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
