import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutContainerPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ContainerName", "Policy"],
  members: {
    ContainerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Policy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
