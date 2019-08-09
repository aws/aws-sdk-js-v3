import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
export type ListUserPoolsExceptionsUnion =
  | InvalidParameterException
  | TooManyRequestsException
  | NotAuthorizedException
  | InternalErrorException;
