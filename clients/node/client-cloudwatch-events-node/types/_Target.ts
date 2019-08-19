import {
  _InputTransformer,
  _UnmarshalledInputTransformer
} from "./_InputTransformer";
import {
  _KinesisParameters,
  _UnmarshalledKinesisParameters
} from "./_KinesisParameters";
import {
  _RunCommandParameters,
  _UnmarshalledRunCommandParameters
} from "./_RunCommandParameters";
import { _EcsParameters, _UnmarshalledEcsParameters } from "./_EcsParameters";
import {
  _BatchParameters,
  _UnmarshalledBatchParameters
} from "./_BatchParameters";
import { _SqsParameters, _UnmarshalledSqsParameters } from "./_SqsParameters";

/**
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a>PutTargets</a>.</p> <p>If you're setting the event bus of another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 */
export interface _Target {
  /**
   * <p>The ID of the target.</p>
   */
  Id: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If one rule triggers multiple targets, you can use a different IAM role for each target.</p>
   */
  RoleArn?: string;

  /**
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data Interchange Format</a>.</p>
   */
  Input?: string;

  /**
   * <p>The value of the JSONPath that is used for extracting part of the matched event when passing it to the target. You must use JSON dot notation, not bracket notation. For more information about JSON paths, see <a href="http://goessner.net/articles/JsonPath/">JSONPath</a>.</p>
   */
  InputPath?: string;

  /**
   * <p>Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.</p>
   */
  InputTransformer?: _InputTransformer;

  /**
   * <p>The custom parameter that you can use to control the shard assignment when the target is a Kinesis data stream. If you don't include this parameter, the default is to use the <code>eventId</code> as the partition key.</p>
   */
  KinesisParameters?: _KinesisParameters;

  /**
   * <p>Parameters used when you are using the rule to invoke Amazon EC2 Run Command.</p>
   */
  RunCommandParameters?: _RunCommandParameters;

  /**
   * <p>Contains the Amazon ECS task definition and task count to be used if the event target is an Amazon ECS task. For more information about Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Task Definitions </a> in the <i>Amazon EC2 Container Service Developer Guide</i>.</p>
   */
  EcsParameters?: _EcsParameters;

  /**
   * <p>If the event target is an AWS Batch job, this contains the job definition, job name, and other parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/jobs.html">Jobs</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  BatchParameters?: _BatchParameters;

  /**
   * <p>Contains the message group ID to use when the target is a FIFO queue.</p> <p>If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.</p>
   */
  SqsParameters?: _SqsParameters;
}

export interface _UnmarshalledTarget extends _Target {
  /**
   * <p>Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.</p>
   */
  InputTransformer?: _UnmarshalledInputTransformer;

  /**
   * <p>The custom parameter that you can use to control the shard assignment when the target is a Kinesis data stream. If you don't include this parameter, the default is to use the <code>eventId</code> as the partition key.</p>
   */
  KinesisParameters?: _UnmarshalledKinesisParameters;

  /**
   * <p>Parameters used when you are using the rule to invoke Amazon EC2 Run Command.</p>
   */
  RunCommandParameters?: _UnmarshalledRunCommandParameters;

  /**
   * <p>Contains the Amazon ECS task definition and task count to be used if the event target is an Amazon ECS task. For more information about Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Task Definitions </a> in the <i>Amazon EC2 Container Service Developer Guide</i>.</p>
   */
  EcsParameters?: _UnmarshalledEcsParameters;

  /**
   * <p>If the event target is an AWS Batch job, this contains the job definition, job name, and other parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/jobs.html">Jobs</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  BatchParameters?: _UnmarshalledBatchParameters;

  /**
   * <p>Contains the message group ID to use when the target is a FIFO queue.</p> <p>If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.</p>
   */
  SqsParameters?: _UnmarshalledSqsParameters;
}
