import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type AdminGetUserExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserNotFoundException
  | InternalErrorException;
