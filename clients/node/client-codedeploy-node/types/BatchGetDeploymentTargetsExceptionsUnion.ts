import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { DeploymentTargetIdRequiredException } from "./DeploymentTargetIdRequiredException";
import { InvalidDeploymentTargetIdException } from "./InvalidDeploymentTargetIdException";
import { DeploymentTargetDoesNotExistException } from "./DeploymentTargetDoesNotExistException";
import { DeploymentTargetListSizeExceededException } from "./DeploymentTargetListSizeExceededException";
export type BatchGetDeploymentTargetsExceptionsUnion =
  | InvalidDeploymentIdException
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | DeploymentNotStartedException
  | DeploymentTargetIdRequiredException
  | InvalidDeploymentTargetIdException
  | DeploymentTargetDoesNotExistException
  | DeploymentTargetListSizeExceededException;
