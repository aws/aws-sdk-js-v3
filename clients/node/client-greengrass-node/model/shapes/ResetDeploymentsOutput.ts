import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetDeploymentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeploymentArn: {
      shape: {
        type: "string"
      }
    },
    DeploymentId: {
      shape: {
        type: "string"
      }
    }
  }
};
