import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
export type CreateUserImportJobExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | PreconditionNotMetException
  | NotAuthorizedException
  | LimitExceededException
  | InternalErrorException;
