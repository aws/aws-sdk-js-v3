import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedIdentityProviderException } from "./UnsupportedIdentityProviderException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
export type UpdateIdentityProviderExceptionsUnion =
  | InvalidParameterException
  | UnsupportedIdentityProviderException
  | ResourceNotFoundException
  | NotAuthorizedException
  | TooManyRequestsException
  | InternalErrorException;
