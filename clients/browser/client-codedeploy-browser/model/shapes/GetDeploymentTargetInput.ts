import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentTargetInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    targetId: {
      shape: {
        type: "string"
      }
    }
  }
};
