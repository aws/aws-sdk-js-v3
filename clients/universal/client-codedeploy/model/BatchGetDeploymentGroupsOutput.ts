import { _DeploymentGroupInfoList } from "./_DeploymentGroupInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDeploymentGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentGroupsInfo: {
      shape: _DeploymentGroupInfoList
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
