import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateTagOptionExceptionsUnion =
  | TagOptionNotMigratedException
  | DuplicateResourceException
  | LimitExceededException;
