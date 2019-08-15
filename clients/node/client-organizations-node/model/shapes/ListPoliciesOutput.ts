import { _Policies } from "./_Policies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Policies: {
      shape: _Policies
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
