import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
export type GetCSVHeaderExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | NotAuthorizedException
  | InternalErrorException;
