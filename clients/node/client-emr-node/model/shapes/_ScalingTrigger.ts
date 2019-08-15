import { _CloudWatchAlarmDefinition } from "./_CloudWatchAlarmDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingTrigger: _Structure_ = {
  type: "structure",
  required: ["CloudWatchAlarmDefinition"],
  members: {
    CloudWatchAlarmDefinition: {
      shape: _CloudWatchAlarmDefinition
    }
  }
};
