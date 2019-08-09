import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceShareLimitExceededException } from "./ResourceShareLimitExceededException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateResourceShareExceptionsUnion =
  | IdempotentParameterMismatchException
  | InvalidStateTransitionException
  | UnknownResourceException
  | MalformedArnException
  | InvalidClientTokenException
  | InvalidParameterException
  | OperationNotPermittedException
  | ResourceShareLimitExceededException
  | ServerInternalException
  | ServiceUnavailableException;
