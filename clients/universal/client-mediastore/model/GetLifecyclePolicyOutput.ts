import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLifecyclePolicyOutput: _Structure_ = {
  type: "structure",
  required: ["LifecyclePolicy"],
  members: {
    LifecyclePolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
