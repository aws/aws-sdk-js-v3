import { _TargetIdList } from "./_TargetIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTargetsInput: _Structure_ = {
  type: "structure",
  required: ["Rule", "Ids"],
  members: {
    Rule: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EventBusName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Ids: {
      shape: _TargetIdList
    },
    Force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
