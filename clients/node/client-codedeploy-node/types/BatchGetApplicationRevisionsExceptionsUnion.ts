import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { RevisionRequiredException } from "./RevisionRequiredException";
import { InvalidRevisionException } from "./InvalidRevisionException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
export type BatchGetApplicationRevisionsExceptionsUnion =
  | ApplicationDoesNotExistException
  | ApplicationNameRequiredException
  | InvalidApplicationNameException
  | RevisionRequiredException
  | InvalidRevisionException
  | BatchLimitExceededException;
