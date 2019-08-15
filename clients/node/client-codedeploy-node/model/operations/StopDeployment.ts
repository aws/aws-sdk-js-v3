import { StopDeploymentInput } from "../shapes/StopDeploymentInput";
import { StopDeploymentOutput } from "../shapes/StopDeploymentOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { DeploymentGroupDoesNotExistException } from "../shapes/DeploymentGroupDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "../shapes/DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
