import { ContinueDeploymentInput } from "./ContinueDeploymentInput";
import { ContinueDeploymentOutput } from "./ContinueDeploymentOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "./DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentIsNotInReadyStateException } from "./DeploymentIsNotInReadyStateException";
import { UnsupportedActionForDeploymentTypeException } from "./UnsupportedActionForDeploymentTypeException";
import { InvalidDeploymentWaitTypeException } from "./InvalidDeploymentWaitTypeException";
import { InvalidDeploymentStatusException } from "./InvalidDeploymentStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
