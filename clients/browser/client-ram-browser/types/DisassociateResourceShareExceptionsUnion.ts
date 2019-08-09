import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { ResourceShareLimitExceededException } from "./ResourceShareLimitExceededException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnknownResourceException } from "./UnknownResourceException";
export type DisassociateResourceShareExceptionsUnion =
  | IdempotentParameterMismatchException
  | ResourceShareLimitExceededException
  | MalformedArnException
  | InvalidStateTransitionException
  | InvalidClientTokenException
  | InvalidParameterException
  | OperationNotPermittedException
  | ServerInternalException
  | ServiceUnavailableException
  | UnknownResourceException;
