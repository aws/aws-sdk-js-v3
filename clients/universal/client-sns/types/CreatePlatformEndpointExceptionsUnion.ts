import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
export type CreatePlatformEndpointExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | AuthorizationErrorException
  | NotFoundException;
