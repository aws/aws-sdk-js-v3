import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteContainerPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ContainerName"],
  members: {
    ContainerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
