import { _LifecyclePolicy } from "./_LifecyclePolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLifecyclePolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Policy: {
      shape: _LifecyclePolicy
    }
  }
};
