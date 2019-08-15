import { _DeploymentsList } from "./_DeploymentsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deployments: {
      shape: _DeploymentsList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
