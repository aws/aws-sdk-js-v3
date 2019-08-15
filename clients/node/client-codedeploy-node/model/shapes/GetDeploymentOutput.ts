import { _DeploymentInfo } from "./_DeploymentInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentInfo: {
      shape: _DeploymentInfo
    }
  }
};
