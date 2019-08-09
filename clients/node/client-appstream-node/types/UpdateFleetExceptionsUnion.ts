import { ResourceInUseException } from "./ResourceInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { InvalidRoleException } from "./InvalidRoleException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type UpdateFleetExceptionsUnion =
  | ResourceInUseException
  | LimitExceededException
  | InvalidAccountStatusException
  | InvalidRoleException
  | ResourceNotFoundException
  | ResourceNotAvailableException
  | InvalidParameterCombinationException
  | ConcurrentModificationException
  | IncompatibleImageException
  | OperationNotPermittedException;
