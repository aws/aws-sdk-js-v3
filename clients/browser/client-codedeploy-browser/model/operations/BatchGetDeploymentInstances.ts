import { BatchGetDeploymentInstancesInput } from "../shapes/BatchGetDeploymentInstancesInput";
import { BatchGetDeploymentInstancesOutput } from "../shapes/BatchGetDeploymentInstancesOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { InstanceIdRequiredException } from "../shapes/InstanceIdRequiredException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { InvalidInstanceNameException } from "../shapes/InvalidInstanceNameException";
import { BatchLimitExceededException } from "../shapes/BatchLimitExceededException";
import { InvalidComputePlatformException } from "../shapes/InvalidComputePlatformException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetDeploymentInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetDeploymentInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetDeploymentInstancesInput
  },
  output: {
    shape: BatchGetDeploymentInstancesOutput
  },
  errors: [
    {
      shape: DeploymentIdRequiredException
    },
    {
      shape: DeploymentDoesNotExistException
    },
    {
      shape: InstanceIdRequiredException
    },
    {
      shape: InvalidDeploymentIdException
    },
    {
      shape: InvalidInstanceNameException
    },
    {
      shape: BatchLimitExceededException
    },
    {
      shape: InvalidComputePlatformException
    }
  ]
};
