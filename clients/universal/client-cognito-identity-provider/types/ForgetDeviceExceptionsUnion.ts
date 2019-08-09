import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
export type ForgetDeviceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | NotAuthorizedException
  | TooManyRequestsException
  | InvalidUserPoolConfigurationException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException
  | InternalErrorException;
