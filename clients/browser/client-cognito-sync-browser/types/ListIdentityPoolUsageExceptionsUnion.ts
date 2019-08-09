import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListIdentityPoolUsageExceptionsUnion =
  | NotAuthorizedException
  | InvalidParameterException
  | InternalErrorException
  | TooManyRequestsException;
