import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
export type ListTopicsExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | AuthorizationErrorException;
