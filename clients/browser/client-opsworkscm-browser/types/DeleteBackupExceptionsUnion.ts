import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
export type DeleteBackupExceptionsUnion =
  | InvalidStateException
  | ResourceNotFoundException
  | ValidationException;
