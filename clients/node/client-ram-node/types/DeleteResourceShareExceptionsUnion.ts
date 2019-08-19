import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteResourceShareExceptionsUnion =
  | OperationNotPermittedException
  | IdempotentParameterMismatchException
  | InvalidStateTransitionException
  | UnknownResourceException
  | MalformedArnException
  | InvalidClientTokenException
  | InvalidParameterException
  | ServerInternalException
  | ServiceUnavailableException;
