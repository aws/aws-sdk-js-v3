import { BatchGetDeploymentTargetsInput } from "./BatchGetDeploymentTargetsInput";
import { BatchGetDeploymentTargetsOutput } from "./BatchGetDeploymentTargetsOutput";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { DeploymentTargetIdRequiredException } from "./DeploymentTargetIdRequiredException";
import { InvalidDeploymentTargetIdException } from "./InvalidDeploymentTargetIdException";
import { DeploymentTargetDoesNotExistException } from "./DeploymentTargetDoesNotExistException";
import { DeploymentTargetListSizeExceededException } from "./DeploymentTargetListSizeExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetDeploymentTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetDeploymentTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetDeploymentTargetsInput
  },
  output: {
    shape: BatchGetDeploymentTargetsOutput
  },
  errors: [
    {
      shape: InvalidDeploymentIdException
    },
    {
      shape: DeploymentIdRequiredException
    },
    {
      shape: DeploymentDoesNotExistException
    },
    {
      shape: DeploymentNotStartedException
    },
    {
      shape: DeploymentTargetIdRequiredException
    },
    {
      shape: InvalidDeploymentTargetIdException
    },
    {
      shape: DeploymentTargetDoesNotExistException
    },
    {
      shape: DeploymentTargetListSizeExceededException
    }
  ]
};
