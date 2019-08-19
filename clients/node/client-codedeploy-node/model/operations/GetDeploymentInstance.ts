import { GetDeploymentInstanceInput } from "../shapes/GetDeploymentInstanceInput";
import { GetDeploymentInstanceOutput } from "../shapes/GetDeploymentInstanceOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { InstanceIdRequiredException } from "../shapes/InstanceIdRequiredException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { InstanceDoesNotExistException } from "../shapes/InstanceDoesNotExistException";
import { InvalidInstanceNameException } from "../shapes/InvalidInstanceNameException";
import { InvalidComputePlatformException } from "../shapes/InvalidComputePlatformException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
