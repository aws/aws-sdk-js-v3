import { InternalErrorException } from "./InternalErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
export type ListProtectionsExceptionsUnion =
  | InternalErrorException
  | ResourceNotFoundException
  | InvalidPaginationTokenException;
