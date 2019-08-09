import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPasswordException } from "./InvalidPasswordException";
export type AdminSetUserPasswordExceptionsUnion =
  | ResourceNotFoundException
  | NotAuthorizedException
  | UserNotFoundException
  | InternalErrorException
  | TooManyRequestsException
  | InvalidParameterException
  | InvalidPasswordException;
