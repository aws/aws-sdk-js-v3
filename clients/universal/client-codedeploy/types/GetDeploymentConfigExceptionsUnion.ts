import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "./DeploymentConfigNameRequiredException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
export type GetDeploymentConfigExceptionsUnion =
  | InvalidDeploymentConfigNameException
  | DeploymentConfigNameRequiredException
  | DeploymentConfigDoesNotExistException
  | InvalidComputePlatformException;
