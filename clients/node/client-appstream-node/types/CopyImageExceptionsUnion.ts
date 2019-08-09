import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { IncompatibleImageException } from "./IncompatibleImageException";
export type CopyImageExceptionsUnion =
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ResourceNotAvailableException
  | LimitExceededException
  | InvalidAccountStatusException
  | IncompatibleImageException;
