import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { AliasExistsException } from "./AliasExistsException";
import { InternalErrorException } from "./InternalErrorException";
export type AdminDisableProviderForUserExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserNotFoundException
  | AliasExistsException
  | InternalErrorException;
