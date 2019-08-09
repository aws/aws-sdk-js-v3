import { _DeploymentGroupsList } from "./_DeploymentGroupsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeploymentGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deploymentGroups: {
      shape: _DeploymentGroupsList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
