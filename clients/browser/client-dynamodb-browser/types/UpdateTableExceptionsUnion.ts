import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerError } from "./InternalServerError";
export type UpdateTableExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException
  | LimitExceededException
  | InternalServerError;
