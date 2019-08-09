import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentAlreadyCompletedException } from "./DeploymentAlreadyCompletedException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentIsNotInReadyStateException } from "./DeploymentIsNotInReadyStateException";
import { UnsupportedActionForDeploymentTypeException } from "./UnsupportedActionForDeploymentTypeException";
import { InvalidDeploymentWaitTypeException } from "./InvalidDeploymentWaitTypeException";
import { InvalidDeploymentStatusException } from "./InvalidDeploymentStatusException";
export type ContinueDeploymentExceptionsUnion =
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | DeploymentAlreadyCompletedException
  | InvalidDeploymentIdException
  | DeploymentIsNotInReadyStateException
  | UnsupportedActionForDeploymentTypeException
  | InvalidDeploymentWaitTypeException
  | InvalidDeploymentStatusException;
