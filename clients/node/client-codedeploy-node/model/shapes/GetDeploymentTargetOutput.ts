import { _DeploymentTarget } from "./_DeploymentTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentTargetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentTarget: {
      shape: _DeploymentTarget
    }
  }
};
