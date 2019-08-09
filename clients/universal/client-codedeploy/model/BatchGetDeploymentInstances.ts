import { BatchGetDeploymentInstancesInput } from "./BatchGetDeploymentInstancesInput";
import { BatchGetDeploymentInstancesOutput } from "./BatchGetDeploymentInstancesOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { InstanceIdRequiredException } from "./InstanceIdRequiredException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
