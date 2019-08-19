import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
export type GetApplicationExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationDoesNotExistException;
