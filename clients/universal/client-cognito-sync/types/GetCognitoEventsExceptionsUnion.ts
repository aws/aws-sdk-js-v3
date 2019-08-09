import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetCognitoEventsExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | NotAuthorizedException
  | InternalErrorException
  | TooManyRequestsException;
