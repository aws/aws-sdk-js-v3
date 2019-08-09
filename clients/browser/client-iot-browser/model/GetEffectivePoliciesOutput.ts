import { _EffectivePolicies } from "./_EffectivePolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEffectivePoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    effectivePolicies: {
      shape: _EffectivePolicies
    }
  }
};
