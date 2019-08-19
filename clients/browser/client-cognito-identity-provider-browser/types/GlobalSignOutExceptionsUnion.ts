import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
export type GlobalSignOutExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | NotAuthorizedException
  | TooManyRequestsException
  | PasswordResetRequiredException
  | UserNotConfirmedException
  | InternalErrorException;
