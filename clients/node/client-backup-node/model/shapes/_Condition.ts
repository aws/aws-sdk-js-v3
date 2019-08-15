import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Condition: _Structure_ = {
  type: "structure",
  required: ["ConditionType", "ConditionKey", "ConditionValue"],
  members: {
    ConditionType: {
      shape: {
        type: "string"
      }
    },
    ConditionKey: {
      shape: {
        type: "string"
      }
    },
    ConditionValue: {
      shape: {
        type: "string"
      }
    }
  }
};
