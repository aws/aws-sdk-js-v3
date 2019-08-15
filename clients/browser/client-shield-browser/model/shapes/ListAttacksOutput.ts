import { _AttackSummaries } from "./_AttackSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAttacksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttackSummaries: {
      shape: _AttackSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
