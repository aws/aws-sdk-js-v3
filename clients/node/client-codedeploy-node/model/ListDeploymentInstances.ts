import { ListDeploymentInstancesInput } from "./ListDeploymentInstancesInput";
import { ListDeploymentInstancesOutput } from "./ListDeploymentInstancesOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { InvalidInstanceStatusException } from "./InvalidInstanceStatusException";
import { InvalidInstanceTypeException } from "./InvalidInstanceTypeException";
import { InvalidDeploymentInstanceTypeException } from "./InvalidDeploymentInstanceTypeException";
import { InvalidTargetFilterNameException } from "./InvalidTargetFilterNameException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
