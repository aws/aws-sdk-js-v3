import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "./DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
export type StopDeploymentExceptionsUnion =
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | DeploymentGroupDoesNotExistException
  | DeploymentAlreadyCompletedException
  | InvalidDeploymentIdException;
