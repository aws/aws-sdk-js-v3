import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
export type ListSubscriptionsExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | AuthorizationErrorException;
