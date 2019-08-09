import { ThrottledException } from "./ThrottledException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
export type ListPhoneNumbersOptedOutExceptionsUnion =
  | ThrottledException
  | InternalErrorException
  | AuthorizationErrorException
  | InvalidParameterException;
