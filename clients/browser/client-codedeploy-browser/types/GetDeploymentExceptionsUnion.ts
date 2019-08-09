import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
export type GetDeploymentExceptionsUnion =
  | DeploymentIdRequiredException
  | InvalidDeploymentIdException
  | DeploymentDoesNotExistException;
