import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
export type DescribeUserPoolClientExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | NotAuthorizedException
  | InternalErrorException;
