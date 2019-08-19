import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { ResourceInUseException } from "./ResourceInUseException";
export type TagResourceExceptionsUnion =
  | LimitExceededException
  | ResourceNotFoundException
  | InternalServerError
  | ResourceInUseException;
