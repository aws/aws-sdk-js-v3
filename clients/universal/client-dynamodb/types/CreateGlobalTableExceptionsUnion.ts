import { LimitExceededException } from "./LimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { GlobalTableAlreadyExistsException } from "./GlobalTableAlreadyExistsException";
import { TableNotFoundException } from "./TableNotFoundException";
export type CreateGlobalTableExceptionsUnion =
  | LimitExceededException
  | InternalServerError
  | GlobalTableAlreadyExistsException
  | TableNotFoundException;
