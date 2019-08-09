import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { UnknownResourceException } from "./UnknownResourceException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { ResourceShareLimitExceededException } from "./ResourceShareLimitExceededException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type AssociateResourceShareExceptionsUnion =
  | IdempotentParameterMismatchException
  | UnknownResourceException
  | InvalidStateTransitionException
  | ResourceShareLimitExceededException
  | MalformedArnException
  | InvalidClientTokenException
  | InvalidParameterException
  | OperationNotPermittedException
  | ServerInternalException
  | ServiceUnavailableException;
