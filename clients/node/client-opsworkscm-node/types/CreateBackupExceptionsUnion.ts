import { InvalidStateException } from "./InvalidStateException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
export type CreateBackupExceptionsUnion =
  | InvalidStateException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException;
