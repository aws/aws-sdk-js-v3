import { _Alarms } from "./_Alarms";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutScalingPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Alarms: {
      shape: _Alarms
    }
  }
};
