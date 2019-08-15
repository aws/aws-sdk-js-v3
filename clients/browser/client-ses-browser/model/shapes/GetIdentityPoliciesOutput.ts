import { _PolicyMap } from "./_PolicyMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityPoliciesOutput: _Structure_ = {
  type: "structure",
  required: ["Policies"],
  members: {
    Policies: {
      shape: _PolicyMap
    }
  }
};
