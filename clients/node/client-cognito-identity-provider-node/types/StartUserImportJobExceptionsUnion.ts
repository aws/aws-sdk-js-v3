import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { NotAuthorizedException } from "./NotAuthorizedException";
export type StartUserImportJobExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | InternalErrorException
  | PreconditionNotMetException
  | NotAuthorizedException;
