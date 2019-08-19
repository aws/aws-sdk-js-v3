import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { CodeMismatchException } from "./CodeMismatchException";
import { ExpiredCodeException } from "./ExpiredCodeException";
import { TooManyFailedAttemptsException } from "./TooManyFailedAttemptsException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
export type ConfirmForgotPasswordExceptionsUnion =
  | ResourceNotFoundException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | InvalidParameterException
  | InvalidPasswordException
  | NotAuthorizedException
  | CodeMismatchException
  | ExpiredCodeException
  | TooManyFailedAttemptsException
  | InvalidLambdaResponseException
  | TooManyRequestsException
  | LimitExceededException
  | UserNotFoundException
  | UserNotConfirmedException
  | InternalErrorException;
