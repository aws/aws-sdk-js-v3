import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
export type SetSMSAttributesExceptionsUnion =
  | InvalidParameterException
  | ThrottledException
  | InternalErrorException
  | AuthorizationErrorException;
