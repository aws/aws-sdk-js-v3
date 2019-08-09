import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type GetProtectionStatusExceptionsUnion =
  | InvalidInputException
  | ResourceNotFoundException
  | InternalErrorException;
