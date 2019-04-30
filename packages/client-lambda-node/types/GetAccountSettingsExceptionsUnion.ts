import { TooManyRequestsException } from "./TooManyRequestsException";
import { ServiceException } from "./ServiceException";
export type GetAccountSettingsExceptionsUnion =
  | TooManyRequestsException
  | ServiceException;
