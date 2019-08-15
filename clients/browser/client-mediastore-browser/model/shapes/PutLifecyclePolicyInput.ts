import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLifecyclePolicyInput: _Structure_ = {
  type: "structure",
  required: ["ContainerName", "LifecyclePolicy"],
  members: {
    ContainerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LifecyclePolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
