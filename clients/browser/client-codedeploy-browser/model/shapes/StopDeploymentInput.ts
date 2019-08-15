import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["deploymentId"],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    autoRollbackEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
