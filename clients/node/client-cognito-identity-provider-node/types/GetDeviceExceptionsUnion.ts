import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
export type GetDeviceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | TooManyRequestsException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException
  | InternalErrorException;
