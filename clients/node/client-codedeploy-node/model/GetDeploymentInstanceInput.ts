import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentInstanceInput: _Structure_ = {
  type: "structure",
  required: ["deploymentId", "instanceId"],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    instanceId: {
      shape: {
        type: "string"
      }
    }
  }
};
