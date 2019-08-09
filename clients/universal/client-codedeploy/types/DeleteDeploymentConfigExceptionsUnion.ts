import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "./DeploymentConfigNameRequiredException";
import { DeploymentConfigInUseException } from "./DeploymentConfigInUseException";
import { InvalidOperationException } from "./InvalidOperationException";
export type DeleteDeploymentConfigExceptionsUnion =
  | InvalidDeploymentConfigNameException
  | DeploymentConfigNameRequiredException
  | DeploymentConfigInUseException
  | InvalidOperationException;
