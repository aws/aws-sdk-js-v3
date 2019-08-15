import { _ResourcePolicies } from "./_ResourcePolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeResourcePoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourcePolicies: {
      shape: _ResourcePolicies
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
