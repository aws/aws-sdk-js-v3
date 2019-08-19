import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStateMachineForExecutionOutput shape
 */
export interface DescribeStateMachineForExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine associated with the execution.</p>
   */
  stateMachineArn: string;

  /**
   * <p>The name of the state machine associated with the execution.</p>
   */
  name: string;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   */
  definition: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the State Machine for the execution. </p>
   */
  roleArn: string;

  /**
   * <p>The date and time the state machine associated with an execution was updated. For a newly created state machine, this is the creation date.</p>
   */
  updateDate: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
