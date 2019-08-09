import { InvalidLifecycleEventHookExecutionStatusException } from "./InvalidLifecycleEventHookExecutionStatusException";
import { InvalidLifecycleEventHookExecutionIdException } from "./InvalidLifecycleEventHookExecutionIdException";
import { LifecycleEventAlreadyCompletedException } from "./LifecycleEventAlreadyCompletedException";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { UnsupportedActionForDeploymentTypeException } from "./UnsupportedActionForDeploymentTypeException";
export type PutLifecycleEventHookExecutionStatusExceptionsUnion =
  | InvalidLifecycleEventHookExecutionStatusException
  | InvalidLifecycleEventHookExecutionIdException
  | LifecycleEventAlreadyCompletedException
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | InvalidDeploymentIdException
  | UnsupportedActionForDeploymentTypeException;
