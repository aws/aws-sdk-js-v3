import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceConflictException } from "./ResourceConflictException";
import { InvalidLambdaFunctionOutputException } from "./InvalidLambdaFunctionOutputException";
import { LambdaThrottledException } from "./LambdaThrottledException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
export type UpdateRecordsExceptionsUnion =
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | ResourceNotFoundException
  | ResourceConflictException
  | InvalidLambdaFunctionOutputException
  | LambdaThrottledException
  | TooManyRequestsException
  | InternalErrorException;
