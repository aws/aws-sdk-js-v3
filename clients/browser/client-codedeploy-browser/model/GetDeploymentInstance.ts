import { GetDeploymentInstanceInput } from "./GetDeploymentInstanceInput";
import { GetDeploymentInstanceOutput } from "./GetDeploymentInstanceOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { InstanceIdRequiredException } from "./InstanceIdRequiredException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { InstanceDoesNotExistException } from "./InstanceDoesNotExistException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDeploymentInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeploymentInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeploymentInstanceInput
  },
  output: {
    shape: GetDeploymentInstanceOutput
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
      shape: InstanceDoesNotExistException
    },
    {
      shape: InvalidInstanceNameException
    },
    {
      shape: InvalidComputePlatformException
    }
  ]
};
