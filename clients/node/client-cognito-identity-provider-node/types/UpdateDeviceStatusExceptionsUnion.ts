import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
export type UpdateDeviceStatusExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | NotAuthorizedException
  | InvalidUserPoolConfigurationException
  | TooManyRequestsException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException
  | InternalErrorException;
