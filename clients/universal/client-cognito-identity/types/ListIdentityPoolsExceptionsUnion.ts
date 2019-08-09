import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type ListIdentityPoolsExceptionsUnion =
  | InvalidParameterException
  | NotAuthorizedException
  | TooManyRequestsException
  | ResourceNotFoundException
  | InternalErrorException;
