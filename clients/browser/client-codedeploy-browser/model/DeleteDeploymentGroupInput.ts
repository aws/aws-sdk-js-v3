import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeploymentGroupInput: _Structure_ = {
  type: "structure",
  required: ["applicationName", "deploymentGroupName"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deploymentGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
