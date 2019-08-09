import { GetDeploymentConfigInput } from "./GetDeploymentConfigInput";
import { GetDeploymentConfigOutput } from "./GetDeploymentConfigOutput";
import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "./DeploymentConfigNameRequiredException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
