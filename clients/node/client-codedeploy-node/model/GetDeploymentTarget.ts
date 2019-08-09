import { GetDeploymentTargetInput } from "./GetDeploymentTargetInput";
import { GetDeploymentTargetOutput } from "./GetDeploymentTargetOutput";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { DeploymentTargetIdRequiredException } from "./DeploymentTargetIdRequiredException";
import { InvalidDeploymentTargetIdException } from "./InvalidDeploymentTargetIdException";
import { DeploymentTargetDoesNotExistException } from "./DeploymentTargetDoesNotExistException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
