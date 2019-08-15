import { GetDeploymentConfigInput } from "../shapes/GetDeploymentConfigInput";
import { GetDeploymentConfigOutput } from "../shapes/GetDeploymentConfigOutput";
import { InvalidDeploymentConfigNameException } from "../shapes/InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "../shapes/DeploymentConfigNameRequiredException";
import { DeploymentConfigDoesNotExistException } from "../shapes/DeploymentConfigDoesNotExistException";
import { InvalidComputePlatformException } from "../shapes/InvalidComputePlatformException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeploymentConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeploymentConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeploymentConfigInput
  },
  output: {
    shape: GetDeploymentConfigOutput
  },
  errors: [
    {
      shape: InvalidDeploymentConfigNameException
    },
    {
      shape: DeploymentConfigNameRequiredException
    },
    {
      shape: DeploymentConfigDoesNotExistException
    },
    {
      shape: InvalidComputePlatformException
    }
  ]
};
