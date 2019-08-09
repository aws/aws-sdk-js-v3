import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
export type UpdateUserPoolDomainExceptionsUnion =
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | InternalErrorException;
