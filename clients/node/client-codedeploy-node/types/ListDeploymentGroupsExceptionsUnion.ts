import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListDeploymentGroupsExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationDoesNotExistException
  | InvalidNextTokenException;
