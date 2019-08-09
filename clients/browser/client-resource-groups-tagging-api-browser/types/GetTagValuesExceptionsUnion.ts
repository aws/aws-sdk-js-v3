import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalServiceException } from "./InternalServiceException";
import { PaginationTokenExpiredException } from "./PaginationTokenExpiredException";
export type GetTagValuesExceptionsUnion =
  | InvalidParameterException
  | ThrottledException
  | InternalServiceException
  | PaginationTokenExpiredException;
