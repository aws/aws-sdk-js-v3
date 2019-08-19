import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type SetIdentityPoolConfigurationExceptionsUnion =
  | NotAuthorizedException
  | InvalidParameterException
  | ResourceNotFoundException
  | InternalErrorException
  | TooManyRequestsException
  | ConcurrentModificationException;
