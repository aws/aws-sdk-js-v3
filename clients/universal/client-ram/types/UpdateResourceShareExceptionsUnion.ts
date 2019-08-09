import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { UnknownResourceException } from "./UnknownResourceException";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidClientTokenException } from "./InvalidClientTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type UpdateResourceShareExceptionsUnion =
  | IdempotentParameterMismatchException
  | MissingRequiredParameterException
  | UnknownResourceException
  | MalformedArnException
  | InvalidClientTokenException
  | InvalidParameterException
  | OperationNotPermittedException
  | ServerInternalException
  | ServiceUnavailableException;
