import { AccessDeniedException } from "./AccessDeniedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListHandshakesForAccountExceptionsUnion =
  | AccessDeniedException
  | ConcurrentModificationException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException;
