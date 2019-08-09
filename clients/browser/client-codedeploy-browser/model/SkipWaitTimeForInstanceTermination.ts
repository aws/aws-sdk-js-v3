import { SkipWaitTimeForInstanceTerminationInput } from "./SkipWaitTimeForInstanceTerminationInput";
import { SkipWaitTimeForInstanceTerminationOutput } from "./SkipWaitTimeForInstanceTerminationOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "./DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { UnsupportedActionForDeploymentTypeException } from "./UnsupportedActionForDeploymentTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
