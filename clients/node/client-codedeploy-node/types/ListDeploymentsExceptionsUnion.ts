import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidTimeRangeException } from "./InvalidTimeRangeException";
import { InvalidDeploymentStatusException } from "./InvalidDeploymentStatusException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListDeploymentsExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationDoesNotExistException
  | InvalidDeploymentGroupNameException
  | DeploymentGroupDoesNotExistException
  | DeploymentGroupNameRequiredException
  | InvalidTimeRangeException
  | InvalidDeploymentStatusException
  | InvalidNextTokenException;
