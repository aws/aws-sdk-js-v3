import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ScopeDoesNotExistException } from "./ScopeDoesNotExistException";
import { InvalidOAuthFlowException } from "./InvalidOAuthFlowException";
import { InternalErrorException } from "./InternalErrorException";
export type CreateUserPoolClientExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | LimitExceededException
  | NotAuthorizedException
  | ScopeDoesNotExistException
  | InvalidOAuthFlowException
  | InternalErrorException;
