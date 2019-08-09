import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalServiceException } from "./InternalServiceException";
import { PaginationTokenExpiredException } from "./PaginationTokenExpiredException";
export type GetResourcesExceptionsUnion =
  | InvalidParameterException
  | ThrottledException
  | InternalServiceException
  | PaginationTokenExpiredException;
