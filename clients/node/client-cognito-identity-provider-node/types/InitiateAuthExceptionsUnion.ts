import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
export type InitiateAuthExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | NotAuthorizedException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | InvalidUserPoolConfigurationException
  | UserLambdaValidationException
  | InvalidLambdaResponseException
  | PasswordResetRequiredException
  | UserNotFoundException
  | UserNotConfirmedException
  | InternalErrorException;
