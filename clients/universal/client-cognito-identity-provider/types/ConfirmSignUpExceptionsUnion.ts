import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyFailedAttemptsException } from "./TooManyFailedAttemptsException";
import { CodeMismatchException } from "./CodeMismatchException";
import { ExpiredCodeException } from "./ExpiredCodeException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { AliasExistsException } from "./AliasExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type ConfirmSignUpExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | NotAuthorizedException
  | TooManyFailedAttemptsException
  | CodeMismatchException
  | ExpiredCodeException
  | InvalidLambdaResponseException
  | AliasExistsException
  | TooManyRequestsException
  | LimitExceededException
  | UserNotFoundException
  | InternalErrorException;
