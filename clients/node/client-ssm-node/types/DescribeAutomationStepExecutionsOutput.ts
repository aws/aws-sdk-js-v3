import { _UnmarshalledStepExecution } from "./_StepExecution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAutomationStepExecutionsOutput shape
 */
export interface DescribeAutomationStepExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of details about the current state of all steps that make up an execution.</p>
   */
  StepExecutions?: Array<_UnmarshalledStepExecution>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
