import { GetDeploymentTargetInput } from "../shapes/GetDeploymentTargetInput";
import { GetDeploymentTargetOutput } from "../shapes/GetDeploymentTargetOutput";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "../shapes/DeploymentNotStartedException";
import { DeploymentTargetIdRequiredException } from "../shapes/DeploymentTargetIdRequiredException";
import { InvalidDeploymentTargetIdException } from "../shapes/InvalidDeploymentTargetIdException";
import { DeploymentTargetDoesNotExistException } from "../shapes/DeploymentTargetDoesNotExistException";
import { InvalidInstanceNameException } from "../shapes/InvalidInstanceNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeploymentTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeploymentTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeploymentTargetInput
  },
  output: {
    shape: GetDeploymentTargetOutput
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
      shape: InvalidInstanceNameException
    }
  ]
};
