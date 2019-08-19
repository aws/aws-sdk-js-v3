import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DescribeIdentityPoolUsageExceptionsUnion =
  | NotAuthorizedException
  | InvalidParameterException
  | ResourceNotFoundException
  | InternalErrorException
  | TooManyRequestsException;
