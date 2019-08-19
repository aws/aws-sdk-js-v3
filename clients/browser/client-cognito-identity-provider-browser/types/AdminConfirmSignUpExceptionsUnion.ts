import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyFailedAttemptsException } from "./TooManyFailedAttemptsException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type AdminConfirmSignUpExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | NotAuthorizedException
  | TooManyFailedAttemptsException
  | InvalidLambdaResponseException
  | TooManyRequestsException
  | LimitExceededException
  | UserNotFoundException
  | InternalErrorException;
