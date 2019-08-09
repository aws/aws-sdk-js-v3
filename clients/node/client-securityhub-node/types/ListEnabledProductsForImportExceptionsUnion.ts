import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
export type ListEnabledProductsForImportExceptionsUnion =
  | InternalException
  | LimitExceededException
  | InvalidAccessException;
