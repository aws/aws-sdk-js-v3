import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentStyle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentType: {
      shape: {
        type: "string"
      }
    },
    deploymentOption: {
      shape: {
        type: "string"
      }
    }
  }
};
