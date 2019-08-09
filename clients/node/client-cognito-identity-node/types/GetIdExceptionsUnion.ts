import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { ExternalServiceException } from "./ExternalServiceException";
export type GetIdExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | NotAuthorizedException
  | ResourceConflictException
  | TooManyRequestsException
  | InternalErrorException
  | LimitExceededException
  | ExternalServiceException;
