import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { DeploymentNotStartedException } from "./DeploymentNotStartedException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { InvalidInstanceStatusException } from "./InvalidInstanceStatusException";
import { InvalidInstanceTypeException } from "./InvalidInstanceTypeException";
import { InvalidDeploymentInstanceTypeException } from "./InvalidDeploymentInstanceTypeException";
export type ListDeploymentTargetsExceptionsUnion =
  | DeploymentIdRequiredException
  | DeploymentDoesNotExistException
  | DeploymentNotStartedException
  | InvalidNextTokenException
  | InvalidDeploymentIdException
  | InvalidInstanceStatusException
  | InvalidInstanceTypeException
  | InvalidDeploymentInstanceTypeException;
