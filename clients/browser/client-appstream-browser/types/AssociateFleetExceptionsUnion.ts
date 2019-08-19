import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type AssociateFleetExceptionsUnion =
  | LimitExceededException
  | InvalidAccountStatusException
  | ResourceNotFoundException
  | ConcurrentModificationException
  | IncompatibleImageException
  | OperationNotPermittedException;
