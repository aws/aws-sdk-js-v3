import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { InvalidStateException } from "./InvalidStateException";
export type AssociateTagOptionWithResourceExceptionsUnion =
  | TagOptionNotMigratedException
  | ResourceNotFoundException
  | InvalidParametersException
  | LimitExceededException
  | DuplicateResourceException
  | InvalidStateException;
