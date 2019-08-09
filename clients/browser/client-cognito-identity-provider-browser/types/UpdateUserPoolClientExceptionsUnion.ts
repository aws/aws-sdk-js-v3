import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ScopeDoesNotExistException } from "./ScopeDoesNotExistException";
import { InvalidOAuthFlowException } from "./InvalidOAuthFlowException";
import { InternalErrorException } from "./InternalErrorException";
export type UpdateUserPoolClientExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | ConcurrentModificationException
  | TooManyRequestsException
  | NotAuthorizedException
  | ScopeDoesNotExistException
  | InvalidOAuthFlowException
  | InternalErrorException;
