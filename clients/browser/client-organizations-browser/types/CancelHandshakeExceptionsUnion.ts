import { AccessDeniedException } from "./AccessDeniedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { HandshakeNotFoundException } from "./HandshakeNotFoundException";
import { InvalidHandshakeTransitionException } from "./InvalidHandshakeTransitionException";
import { HandshakeAlreadyInStateException } from "./HandshakeAlreadyInStateException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CancelHandshakeExceptionsUnion =
  | AccessDeniedException
  | ConcurrentModificationException
  | HandshakeNotFoundException
  | InvalidHandshakeTransitionException
  | HandshakeAlreadyInStateException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException;
