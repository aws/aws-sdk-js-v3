import { _TargetList } from "./_TargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTargetsByRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Targets: {
      shape: _TargetList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
