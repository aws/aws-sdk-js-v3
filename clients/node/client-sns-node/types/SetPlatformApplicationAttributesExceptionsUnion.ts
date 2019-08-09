import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
export type SetPlatformApplicationAttributesExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | AuthorizationErrorException
  | NotFoundException;
