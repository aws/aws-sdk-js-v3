import { Structure as _Structure_ } from "@aws-sdk/types";

export const ContinueDeploymentInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    deploymentWaitType: {
      shape: {
        type: "string"
      }
    }
  }
};
