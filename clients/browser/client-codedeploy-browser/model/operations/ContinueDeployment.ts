import { ContinueDeploymentInput } from "../shapes/ContinueDeploymentInput";
import { ContinueDeploymentOutput } from "../shapes/ContinueDeploymentOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "../shapes/DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { DeploymentIsNotInReadyStateException } from "../shapes/DeploymentIsNotInReadyStateException";
import { UnsupportedActionForDeploymentTypeException } from "../shapes/UnsupportedActionForDeploymentTypeException";
import { InvalidDeploymentWaitTypeException } from "../shapes/InvalidDeploymentWaitTypeException";
import { InvalidDeploymentStatusException } from "../shapes/InvalidDeploymentStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ContinueDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ContinueDeployment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ContinueDeploymentInput
  },
  output: {
    shape: ContinueDeploymentOutput
  },
  errors: [
    {
      shape: DeploymentIdRequiredException
    },
    {
      shape: DeploymentDoesNotExistException
    },
    {
      shape: DeploymentAlreadyCompletedException
    },
    {
      shape: InvalidDeploymentIdException
    },
    {
      shape: DeploymentIsNotInReadyStateException
    },
    {
      shape: UnsupportedActionForDeploymentTypeException
    },
    {
      shape: InvalidDeploymentWaitTypeException
    },
    {
      shape: InvalidDeploymentStatusException
    }
  ]
};
