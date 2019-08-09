import { _DeploymentConfigInfo } from "./_DeploymentConfigInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentConfigInfo: {
      shape: _DeploymentConfigInfo
    }
  }
};
