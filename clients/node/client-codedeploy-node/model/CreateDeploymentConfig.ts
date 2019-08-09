import { CreateDeploymentConfigInput } from "./CreateDeploymentConfigInput";
import { CreateDeploymentConfigOutput } from "./CreateDeploymentConfigOutput";
import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "./DeploymentConfigNameRequiredException";
import { DeploymentConfigAlreadyExistsException } from "./DeploymentConfigAlreadyExistsException";
import { InvalidMinimumHealthyHostValueException } from "./InvalidMinimumHealthyHostValueException";
import { DeploymentConfigLimitExceededException } from "./DeploymentConfigLimitExceededException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
import { InvalidTrafficRoutingConfigurationException } from "./InvalidTrafficRoutingConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDeploymentConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeploymentConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDeploymentConfigInput
  },
  output: {
    shape: CreateDeploymentConfigOutput
  },
  errors: [
    {
      shape: InvalidDeploymentConfigNameException
    },
    {
      shape: DeploymentConfigNameRequiredException
    },
    {
      shape: DeploymentConfigAlreadyExistsException
    },
    {
      shape: InvalidMinimumHealthyHostValueException
    },
    {
      shape: DeploymentConfigLimitExceededException
    },
    {
      shape: InvalidComputePlatformException
    },
    {
      shape: InvalidTrafficRoutingConfigurationException
    }
  ]
};
