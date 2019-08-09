import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
export type BatchGetDeploymentGroupsExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationDoesNotExistException
  | DeploymentGroupNameRequiredException
  | InvalidDeploymentGroupNameException
  | BatchLimitExceededException
  | DeploymentConfigDoesNotExistException;
