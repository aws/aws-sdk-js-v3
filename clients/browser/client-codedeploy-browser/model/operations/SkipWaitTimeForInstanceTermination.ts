import { SkipWaitTimeForInstanceTerminationInput } from "../shapes/SkipWaitTimeForInstanceTerminationInput";
import { SkipWaitTimeForInstanceTerminationOutput } from "../shapes/SkipWaitTimeForInstanceTerminationOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "../shapes/DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { DeploymentNotStartedException } from "../shapes/DeploymentNotStartedException";
import { UnsupportedActionForDeploymentTypeException } from "../shapes/UnsupportedActionForDeploymentTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SkipWaitTimeForInstanceTermination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SkipWaitTimeForInstanceTermination",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SkipWaitTimeForInstanceTerminationInput
  },
  output: {
    shape: SkipWaitTimeForInstanceTerminationOutput
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
      shape: DeploymentNotStartedException
    },
    {
      shape: UnsupportedActionForDeploymentTypeException
    }
  ]
};
