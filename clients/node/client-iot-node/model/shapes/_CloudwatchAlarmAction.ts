import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudwatchAlarmAction: _Structure_ = {
  type: "structure",
  required: ["roleArn", "alarmName", "stateReason", "stateValue"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    alarmName: {
      shape: {
        type: "string"
      }
    },
    stateReason: {
      shape: {
        type: "string"
      }
    },
    stateValue: {
      shape: {
        type: "string"
      }
    }
  }
};
