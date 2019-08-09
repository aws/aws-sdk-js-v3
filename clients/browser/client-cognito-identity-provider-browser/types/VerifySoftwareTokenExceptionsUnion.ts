import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
import { EnableSoftwareTokenMFAException } from "./EnableSoftwareTokenMFAException";
import { SoftwareTokenMFANotFoundException } from "./SoftwareTokenMFANotFoundException";
import { CodeMismatchException } from "./CodeMismatchException";
export type VerifySoftwareTokenExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | TooManyRequestsException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException
  | InternalErrorException
  | EnableSoftwareTokenMFAException
  | SoftwareTokenMFANotFoundException
  | CodeMismatchException;
