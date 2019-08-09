import { _DeploymentGroupInfo } from "./_DeploymentGroupInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentGroupInfo: {
      shape: _DeploymentGroupInfo
    }
  }
};
