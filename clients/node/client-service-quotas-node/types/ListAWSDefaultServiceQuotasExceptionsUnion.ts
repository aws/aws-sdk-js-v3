import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListAWSDefaultServiceQuotasExceptionsUnion =
  | AccessDeniedException
  | NoSuchResourceException
  | IllegalArgumentException
  | InvalidPaginationTokenException
  | ServiceException
  | TooManyRequestsException;
