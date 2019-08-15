import { _TargetList } from "./_TargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutTargetsInput: _Structure_ = {
  type: "structure",
  required: ["Rule", "Targets"],
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
    Targets: {
      shape: _TargetList
    }
  }
};
