import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { InvalidParametersException } from "./InvalidParametersException";
export type UpdateTagOptionExceptionsUnion =
  | TagOptionNotMigratedException
  | ResourceNotFoundException
  | DuplicateResourceException
  | InvalidParametersException;
