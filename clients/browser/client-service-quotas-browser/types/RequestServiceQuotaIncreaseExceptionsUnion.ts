import { DependencyAccessDeniedException } from "./DependencyAccessDeniedException";
import { QuotaExceededException } from "./QuotaExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchResourceException } from "./NoSuchResourceException";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type RequestServiceQuotaIncreaseExceptionsUnion =
  | DependencyAccessDeniedException
  | QuotaExceededException
  | ResourceAlreadyExistsException
  | AccessDeniedException
  | NoSuchResourceException
  | IllegalArgumentException
  | InvalidResourceStateException
  | ServiceException
  | TooManyRequestsException;
