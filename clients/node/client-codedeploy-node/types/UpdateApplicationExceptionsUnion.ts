import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationAlreadyExistsException } from "./ApplicationAlreadyExistsException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
export type UpdateApplicationExceptionsUnion =
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | ApplicationAlreadyExistsException
  | ApplicationDoesNotExistException;
