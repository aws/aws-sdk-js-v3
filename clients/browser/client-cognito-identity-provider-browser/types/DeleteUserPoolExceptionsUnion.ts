import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserImportInProgressException } from "./UserImportInProgressException";
import { InternalErrorException } from "./InternalErrorException";
export type DeleteUserPoolExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserImportInProgressException
  | InternalErrorException;
