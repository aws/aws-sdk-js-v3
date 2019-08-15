import { _DeploymentGroupsList } from "./_DeploymentGroupsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDeploymentGroupsInput: _Structure_ = {
  type: "structure",
  required: ["applicationName", "deploymentGroupNames"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deploymentGroupNames: {
      shape: _DeploymentGroupsList
    }
  }
};
