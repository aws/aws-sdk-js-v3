import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { ExpiredIteratorException } from "./ExpiredIteratorException";
import { TrimmedDataAccessException } from "./TrimmedDataAccessException";
export type GetRecordsExceptionsUnion =
  | ResourceNotFoundException
  | LimitExceededException
  | InternalServerError
  | ExpiredIteratorException
  | TrimmedDataAccessException;
