import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
export type GetUserPoolMfaConfigExceptionsUnion =
  | InvalidParameterException
  | TooManyRequestsException
  | ResourceNotFoundException
  | NotAuthorizedException
  | InternalErrorException;
