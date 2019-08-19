import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type StartFleetExceptionsUnion =
  | ResourceNotFoundException
  | OperationNotPermittedException
  | LimitExceededException
  | InvalidAccountStatusException
  | ConcurrentModificationException;
