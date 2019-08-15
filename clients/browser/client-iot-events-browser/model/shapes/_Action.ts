import { _SetVariableAction } from "./_SetVariableAction";
import { _SNSTopicPublishAction } from "./_SNSTopicPublishAction";
import { _IotTopicPublishAction } from "./_IotTopicPublishAction";
import { _SetTimerAction } from "./_SetTimerAction";
import { _ClearTimerAction } from "./_ClearTimerAction";
import { _ResetTimerAction } from "./_ResetTimerAction";
import { _LambdaAction } from "./_LambdaAction";
import { _IotEventsAction } from "./_IotEventsAction";
import { _SqsAction } from "./_SqsAction";
import { _FirehoseAction } from "./_FirehoseAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Action: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    setVariable: {
      shape: _SetVariableAction
    },
    sns: {
      shape: _SNSTopicPublishAction
    },
    iotTopicPublish: {
      shape: _IotTopicPublishAction
    },
    setTimer: {
      shape: _SetTimerAction
    },
    clearTimer: {
      shape: _ClearTimerAction
    },
    resetTimer: {
      shape: _ResetTimerAction
    },
    lambda: {
      shape: _LambdaAction
    },
    iotEvents: {
      shape: _IotEventsAction
    },
    sqs: {
      shape: _SqsAction
    },
    firehose: {
      shape: _FirehoseAction
    }
  }
};
