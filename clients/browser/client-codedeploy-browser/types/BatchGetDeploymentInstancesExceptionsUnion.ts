import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { InstanceIdRequiredException } from "./InstanceIdRequiredException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
import { InvalidComputePlatformException } from "./InvalidComputePlatformException";
export type BatchGetDeploymentInstancesExceptionsUnion =
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | InstanceIdRequiredException
  | InvalidDeploymentIdException
  | InvalidInstanceNameException
  | BatchLimitExceededException
  | InvalidComputePlatformException;
