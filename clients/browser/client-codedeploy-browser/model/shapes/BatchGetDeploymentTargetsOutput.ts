import { _DeploymentTargetList } from "./_DeploymentTargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDeploymentTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentTargets: {
      shape: _DeploymentTargetList
    }
  }
};
