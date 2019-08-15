import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeploymentConfigInput: _Structure_ = {
  type: "structure",
  required: ["deploymentConfigName"],
  members: {
    deploymentConfigName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
