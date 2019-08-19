import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
export type DeletePlatformApplicationExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | AuthorizationErrorException;
