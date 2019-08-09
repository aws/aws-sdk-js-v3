import { StopDeploymentInput } from "./StopDeploymentInput";
import { StopDeploymentOutput } from "./StopDeploymentOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "./DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopDeployment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopDeploymentInput
  },
  output: {
    shape: StopDeploymentOutput
  },
  errors: [
    {
      shape: DeploymentIdRequiredException
    },
    {
      shape: DeploymentDoesNotExistException
    },
    {
      shape: DeploymentGroupDoesNotExistException
    },
    {
      shape: DeploymentAlreadyCompletedException
    },
    {
      shape: InvalidDeploymentIdException
    }
  ]
};
