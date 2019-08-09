import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type AdminAddUserToGroupExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserNotFoundException
  | InternalErrorException;
