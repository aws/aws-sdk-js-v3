import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserPoolTaggingException } from "./UserPoolTaggingException";
import { InternalErrorException } from "./InternalErrorException";
export type DescribeUserPoolExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserPoolTaggingException
  | InternalErrorException;
