import { _DeploymentConfigsList } from "./_DeploymentConfigsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentConfigsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentConfigsList: {
      shape: _DeploymentConfigsList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
