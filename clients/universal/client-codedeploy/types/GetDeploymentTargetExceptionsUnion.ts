import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { DeploymentTargetIdRequiredException } from "./DeploymentTargetIdRequiredException";
import { InvalidDeploymentTargetIdException } from "./InvalidDeploymentTargetIdException";
import { DeploymentTargetDoesNotExistException } from "./DeploymentTargetDoesNotExistException";
import { InvalidInstanceNameException } from "./InvalidInstanceNameException";
export type GetDeploymentTargetExceptionsUnion =
  | InvalidDeploymentIdException
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | DeploymentNotStartedException
  | DeploymentTargetIdRequiredException
  | InvalidDeploymentTargetIdException
  | DeploymentTargetDoesNotExistException
  | InvalidInstanceNameException;
