import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { UsernameExistsException } from "./UsernameExistsException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
export type ConfirmDeviceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | NotAuthorizedException
  | InvalidPasswordException
  | InvalidLambdaResponseException
  | UsernameExistsException
  | InvalidUserPoolConfigurationException
  | TooManyRequestsException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException
  | InternalErrorException;
