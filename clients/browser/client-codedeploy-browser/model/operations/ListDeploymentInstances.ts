import { ListDeploymentInstancesInput } from "../shapes/ListDeploymentInstancesInput";
import { ListDeploymentInstancesOutput } from "../shapes/ListDeploymentInstancesOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "../shapes/DeploymentNotStartedException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { InvalidInstanceStatusException } from "../shapes/InvalidInstanceStatusException";
import { InvalidInstanceTypeException } from "../shapes/InvalidInstanceTypeException";
import { InvalidDeploymentInstanceTypeException } from "../shapes/InvalidDeploymentInstanceTypeException";
import { InvalidTargetFilterNameException } from "../shapes/InvalidTargetFilterNameException";
import { InvalidComputePlatformException } from "../shapes/InvalidComputePlatformException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeploymentInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeploymentInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDeploymentInstancesInput
  },
  output: {
    shape: ListDeploymentInstancesOutput
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
    },
    {
      shape: InvalidTargetFilterNameException
    },
    {
      shape: InvalidComputePlatformException
    }
  ]
};
