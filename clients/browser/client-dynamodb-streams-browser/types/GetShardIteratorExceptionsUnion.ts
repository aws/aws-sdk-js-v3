import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { TrimmedDataAccessException } from "./TrimmedDataAccessException";
export type GetShardIteratorExceptionsUnion =
  | ResourceNotFoundException
  | InternalServerError
  | TrimmedDataAccessException;
