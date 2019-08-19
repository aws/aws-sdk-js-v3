import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { InstanceIdRequiredException } from "./InstanceIdRequiredException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { InstanceDoesNotExistException } from "./InstanceDoesNotExistException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
export type GetDeploymentInstanceExceptionsUnion =
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | InstanceIdRequiredException
  | InvalidDeploymentIdException
  | InstanceDoesNotExistException
  | InvalidInstanceNameException
  | InvalidComputePlatformException;
