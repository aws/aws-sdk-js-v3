import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
export type BatchGetDeploymentsExceptionsUnion =
  | DeploymentIdRequiredException
  | InvalidDeploymentIdException
  | BatchLimitExceededException;
