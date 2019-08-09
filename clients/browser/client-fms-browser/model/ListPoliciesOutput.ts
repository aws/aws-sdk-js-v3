import { _PolicySummaryList } from "./_PolicySummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyList: {
      shape: _PolicySummaryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
