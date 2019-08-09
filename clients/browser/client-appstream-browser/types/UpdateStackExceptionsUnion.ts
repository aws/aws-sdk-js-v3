import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidRoleException } from "./InvalidRoleException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type UpdateStackExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidRoleException
  | InvalidParameterCombinationException
  | LimitExceededException
  | InvalidAccountStatusException
  | IncompatibleImageException
  | OperationNotPermittedException
  | ConcurrentModificationException;
