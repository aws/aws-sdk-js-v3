import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    concurrentDeploymentPercentage: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    failureThresholdPercentage: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
