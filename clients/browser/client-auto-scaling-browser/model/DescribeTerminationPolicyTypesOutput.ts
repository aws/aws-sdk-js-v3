import { _TerminationPolicies } from "./_TerminationPolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTerminationPolicyTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TerminationPolicyTypes: {
      shape: _TerminationPolicies
    }
  }
};
