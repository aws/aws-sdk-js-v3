import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRoleException } from "./InvalidRoleException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type CreateImageBuilderExceptionsUnion =
  | LimitExceededException
  | InvalidAccountStatusException
  | ResourceAlreadyExistsException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | InvalidRoleException
  | ConcurrentModificationException
  | InvalidParameterCombinationException
  | IncompatibleImageException
  | OperationNotPermittedException;
