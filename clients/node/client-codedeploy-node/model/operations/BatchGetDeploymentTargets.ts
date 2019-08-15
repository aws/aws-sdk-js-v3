import { BatchGetDeploymentTargetsInput } from "../shapes/BatchGetDeploymentTargetsInput";
import { BatchGetDeploymentTargetsOutput } from "../shapes/BatchGetDeploymentTargetsOutput";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "../shapes/DeploymentNotStartedException";
import { DeploymentTargetIdRequiredException } from "../shapes/DeploymentTargetIdRequiredException";
import { InvalidDeploymentTargetIdException } from "../shapes/InvalidDeploymentTargetIdException";
import { DeploymentTargetDoesNotExistException } from "../shapes/DeploymentTargetDoesNotExistException";
import { DeploymentTargetListSizeExceededException } from "../shapes/DeploymentTargetListSizeExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
