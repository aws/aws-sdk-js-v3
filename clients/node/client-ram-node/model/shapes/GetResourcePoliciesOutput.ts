import { _PolicyList } from "./_PolicyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcePoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    policies: {
      shape: _PolicyList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
