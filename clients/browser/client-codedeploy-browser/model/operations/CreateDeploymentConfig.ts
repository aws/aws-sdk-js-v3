import { CreateDeploymentConfigInput } from "../shapes/CreateDeploymentConfigInput";
import { CreateDeploymentConfigOutput } from "../shapes/CreateDeploymentConfigOutput";
import { InvalidDeploymentConfigNameException } from "../shapes/InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "../shapes/DeploymentConfigNameRequiredException";
import { DeploymentConfigAlreadyExistsException } from "../shapes/DeploymentConfigAlreadyExistsException";
import { InvalidMinimumHealthyHostValueException } from "../shapes/InvalidMinimumHealthyHostValueException";
import { DeploymentConfigLimitExceededException } from "../shapes/DeploymentConfigLimitExceededException";
import { InvalidComputePlatformException } from "../shapes/InvalidComputePlatformException";
import { InvalidTrafficRoutingConfigurationException } from "../shapes/InvalidTrafficRoutingConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
