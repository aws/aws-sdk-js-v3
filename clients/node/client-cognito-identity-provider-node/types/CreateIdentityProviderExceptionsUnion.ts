import { InvalidParameterException } from "./InvalidParameterException";
import { DuplicateProviderException } from "./DuplicateProviderException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
export type CreateIdentityProviderExceptionsUnion =
  | InvalidParameterException
  | DuplicateProviderException
  | ResourceNotFoundException
  | NotAuthorizedException
  | TooManyRequestsException
  | LimitExceededException
  | InternalErrorException;
