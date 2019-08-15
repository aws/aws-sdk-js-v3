import { _BehaviorCriteria } from "./_BehaviorCriteria";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Behavior: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    metric: {
      shape: {
        type: "string"
      }
    },
    criteria: {
      shape: _BehaviorCriteria
    }
  }
};
