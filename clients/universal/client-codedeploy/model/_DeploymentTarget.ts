import { _InstanceTarget } from "./_InstanceTarget";
import { _LambdaTarget } from "./_LambdaTarget";
import { _ECSTarget } from "./_ECSTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentTargetType: {
      shape: {
        type: "string"
      }
    },
    instanceTarget: {
      shape: _InstanceTarget
    },
    lambdaTarget: {
      shape: _LambdaTarget
    },
    ecsTarget: {
      shape: _ECSTarget
    }
  }
};
