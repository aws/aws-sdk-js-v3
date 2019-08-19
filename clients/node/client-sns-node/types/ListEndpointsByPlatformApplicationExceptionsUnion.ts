import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
export type ListEndpointsByPlatformApplicationExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | AuthorizationErrorException
  | NotFoundException;
