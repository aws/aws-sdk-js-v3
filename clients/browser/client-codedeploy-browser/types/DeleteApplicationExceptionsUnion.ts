import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { InvalidRoleException } from "./InvalidRoleException";
export type DeleteApplicationExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | InvalidRoleException;
