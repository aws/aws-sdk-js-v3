import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetServiceQuotaExceptionsUnion =
  | AccessDeniedException
  | NoSuchResourceException
  | IllegalArgumentException
  | ServiceException
  | TooManyRequestsException;
