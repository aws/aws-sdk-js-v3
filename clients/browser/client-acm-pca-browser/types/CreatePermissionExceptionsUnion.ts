import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { PermissionAlreadyExistsException } from "./PermissionAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidStateException } from "./InvalidStateException";
import { RequestFailedException } from "./RequestFailedException";
export type CreatePermissionExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | PermissionAlreadyExistsException
  | LimitExceededException
  | InvalidStateException
  | RequestFailedException;
