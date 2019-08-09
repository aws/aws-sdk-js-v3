import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { RevisionDoesNotExistException } from "./RevisionDoesNotExistException";
import { RevisionRequiredException } from "./RevisionRequiredException";
import { InvalidRevisionException } from "./InvalidRevisionException";
export type GetApplicationRevisionExceptionsUnion =
  | ApplicationDoesNotExistException
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | RevisionDoesNotExistException
  | RevisionRequiredException
  | InvalidRevisionException;
