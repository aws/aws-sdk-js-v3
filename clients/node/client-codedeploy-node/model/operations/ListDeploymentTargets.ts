import { ListDeploymentTargetsInput } from "../shapes/ListDeploymentTargetsInput";
import { ListDeploymentTargetsOutput } from "../shapes/ListDeploymentTargetsOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "../shapes/DeploymentNotStartedException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { InvalidInstanceStatusException } from "../shapes/InvalidInstanceStatusException";
import { InvalidInstanceTypeException } from "../shapes/InvalidInstanceTypeException";
import { InvalidDeploymentInstanceTypeException } from "../shapes/InvalidDeploymentInstanceTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
