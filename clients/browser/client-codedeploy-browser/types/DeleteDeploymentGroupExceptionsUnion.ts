import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { InvalidRoleException } from "./InvalidRoleException";
export type DeleteDeploymentGroupExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | DeploymentGroupNameRequiredException
  | InvalidDeploymentGroupNameException
  | InvalidRoleException;
