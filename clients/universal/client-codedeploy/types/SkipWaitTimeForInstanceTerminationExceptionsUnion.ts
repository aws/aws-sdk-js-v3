import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "./DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { UnsupportedActionForDeploymentTypeException } from "./UnsupportedActionForDeploymentTypeException";
export type SkipWaitTimeForInstanceTerminationExceptionsUnion =
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | DeploymentAlreadyCompletedException
  | InvalidDeploymentIdException
  | DeploymentNotStartedException
  | UnsupportedActionForDeploymentTypeException;
