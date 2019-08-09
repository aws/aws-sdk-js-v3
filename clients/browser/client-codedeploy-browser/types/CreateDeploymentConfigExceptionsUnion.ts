import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "./DeploymentConfigNameRequiredException";
import { DeploymentConfigAlreadyExistsException } from "./DeploymentConfigAlreadyExistsException";
import { InvalidMinimumHealthyHostValueException } from "./InvalidMinimumHealthyHostValueException";
import { DeploymentConfigLimitExceededException } from "./DeploymentConfigLimitExceededException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
import { InvalidTrafficRoutingConfigurationException } from "./InvalidTrafficRoutingConfigurationException";
export type CreateDeploymentConfigExceptionsUnion =
  | InvalidDeploymentConfigNameException
  | DeploymentConfigNameRequiredException
  | DeploymentConfigAlreadyExistsException
  | InvalidMinimumHealthyHostValueException
  | DeploymentConfigLimitExceededException
  | InvalidComputePlatformException
  | InvalidTrafficRoutingConfigurationException;
