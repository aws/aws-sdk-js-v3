import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { DescriptionTooLongException } from "./DescriptionTooLongException";
import { RevisionRequiredException } from "./RevisionRequiredException";
import { InvalidRevisionException } from "./InvalidRevisionException";
export type RegisterApplicationRevisionExceptionsUnion =
  | ApplicationDoesNotExistException
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | DescriptionTooLongException
  | RevisionRequiredException
  | InvalidRevisionException;
