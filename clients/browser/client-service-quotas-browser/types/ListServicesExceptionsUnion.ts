import { AccessDeniedException } from "./AccessDeniedException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidPaginationTokenException } from "./InvalidPaginationTokenException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListServicesExceptionsUnion =
  | AccessDeniedException
  | IllegalArgumentException
  | InvalidPaginationTokenException
  | ServiceException
  | TooManyRequestsException;
