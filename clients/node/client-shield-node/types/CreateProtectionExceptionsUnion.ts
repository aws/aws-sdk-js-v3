import { InternalErrorException } from "./InternalErrorException";
import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidOperationException } from "./InvalidOperationException";
import { LimitsExceededException } from "./LimitsExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreateProtectionExceptionsUnion =
  | InternalErrorException
  | InvalidResourceException
  | InvalidOperationException
  | LimitsExceededException
  | ResourceAlreadyExistsException
  | OptimisticLockException
  | ResourceNotFoundException;
