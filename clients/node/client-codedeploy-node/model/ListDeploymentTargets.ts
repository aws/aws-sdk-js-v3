import { ListDeploymentTargetsInput } from "./ListDeploymentTargetsInput";
import { ListDeploymentTargetsOutput } from "./ListDeploymentTargetsOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { InvalidInstanceStatusException } from "./InvalidInstanceStatusException";
import { InvalidInstanceTypeException } from "./InvalidInstanceTypeException";
import { InvalidDeploymentInstanceTypeException } from "./InvalidDeploymentInstanceTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDeploymentTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeploymentTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDeploymentTargetsInput
  },
  output: {
    shape: ListDeploymentTargetsOutput
  },
  errors: [
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
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidDeploymentIdException
    },
    {
      shape: InvalidInstanceStatusException
    },
    {
      shape: InvalidInstanceTypeException
    },
    {
      shape: InvalidDeploymentInstanceTypeException
    }
  ]
};
