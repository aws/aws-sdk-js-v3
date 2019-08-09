import {
  _SetVariableAction,
  _UnmarshalledSetVariableAction
} from "./_SetVariableAction";
import {
  _SNSTopicPublishAction,
  _UnmarshalledSNSTopicPublishAction
} from "./_SNSTopicPublishAction";
import {
  _IotTopicPublishAction,
  _UnmarshalledIotTopicPublishAction
} from "./_IotTopicPublishAction";
import {
  _SetTimerAction,
  _UnmarshalledSetTimerAction
} from "./_SetTimerAction";
import {
  _ClearTimerAction,
  _UnmarshalledClearTimerAction
} from "./_ClearTimerAction";
import {
  _ResetTimerAction,
  _UnmarshalledResetTimerAction
} from "./_ResetTimerAction";
import { _LambdaAction, _UnmarshalledLambdaAction } from "./_LambdaAction";
import {
  _IotEventsAction,
  _UnmarshalledIotEventsAction
} from "./_IotEventsAction";
import { _SqsAction, _UnmarshalledSqsAction } from "./_SqsAction";
import {
  _FirehoseAction,
  _UnmarshalledFirehoseAction
} from "./_FirehoseAction";

/**
 * <p>An action to be performed when the <code>"condition"</code> is TRUE.</p>
 */
export interface _Action {
  /**
   * <p>Sets a variable to a specified value.</p>
   */
  setVariable?: _SetVariableAction;

  /**
   * <p>Sends an Amazon SNS message.</p>
   */
  sns?: _SNSTopicPublishAction;

  /**
   * <p>Publishes an MQTT message with the given topic to the AWS IoT message broker.</p>
   */
  iotTopicPublish?: _IotTopicPublishAction;

  /**
   * <p>Information needed to set the timer.</p>
   */
  setTimer?: _SetTimerAction;

  /**
   * <p>Information needed to clear the timer.</p>
   */
  clearTimer?: _ClearTimerAction;

  /**
   * <p>Information needed to reset the timer.</p>
   */
  resetTimer?: _ResetTimerAction;

  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the event which triggered the action.</p>
   */
  lambda?: _LambdaAction;

  /**
   * <p>Sends an IoT Events input, passing in information about the detector model instance and the event which triggered the action.</p>
   */
  iotEvents?: _IotEventsAction;

  /**
   * <p>Sends information about the detector model instance and the event which triggered the action to an AWS SQS queue.</p>
   */
  sqs?: _SqsAction;

  /**
   * <p>Sends information about the detector model instance and the event which triggered the action to a Kinesis Data Firehose stream.</p>
   */
  firehose?: _FirehoseAction;
}

export interface _UnmarshalledAction extends _Action {
  /**
   * <p>Sets a variable to a specified value.</p>
   */
  setVariable?: _UnmarshalledSetVariableAction;

  /**
   * <p>Sends an Amazon SNS message.</p>
   */
  sns?: _UnmarshalledSNSTopicPublishAction;

  /**
   * <p>Publishes an MQTT message with the given topic to the AWS IoT message broker.</p>
   */
  iotTopicPublish?: _UnmarshalledIotTopicPublishAction;

  /**
   * <p>Information needed to set the timer.</p>
   */
  setTimer?: _UnmarshalledSetTimerAction;

  /**
   * <p>Information needed to clear the timer.</p>
   */
  clearTimer?: _UnmarshalledClearTimerAction;

  /**
   * <p>Information needed to reset the timer.</p>
   */
  resetTimer?: _UnmarshalledResetTimerAction;

  /**
   * <p>Calls a Lambda function, passing in information about the detector model instance and the event which triggered the action.</p>
   */
  lambda?: _UnmarshalledLambdaAction;

  /**
   * <p>Sends an IoT Events input, passing in information about the detector model instance and the event which triggered the action.</p>
   */
  iotEvents?: _UnmarshalledIotEventsAction;

  /**
   * <p>Sends information about the detector model instance and the event which triggered the action to an AWS SQS queue.</p>
   */
  sqs?: _UnmarshalledSqsAction;

  /**
   * <p>Sends information about the detector model instance and the event which triggered the action to a Kinesis Data Firehose stream.</p>
   */
  firehose?: _UnmarshalledFirehoseAction;
}
