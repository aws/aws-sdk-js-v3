import { _LifecyclePolicies } from "./_LifecyclePolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLifecycleConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LifecyclePolicies: {
      shape: _LifecyclePolicies
    }
  }
};
