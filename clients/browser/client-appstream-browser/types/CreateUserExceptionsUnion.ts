import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type CreateUserExceptionsUnion =
  | ResourceAlreadyExistsException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | LimitExceededException
  | OperationNotPermittedException;
