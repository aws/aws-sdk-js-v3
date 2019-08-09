import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
export type RemovePermissionExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | AuthorizationErrorException
  | NotFoundException;
