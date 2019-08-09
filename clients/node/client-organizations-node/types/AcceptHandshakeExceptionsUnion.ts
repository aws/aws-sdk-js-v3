import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { HandshakeConstraintViolationException } from "./HandshakeConstraintViolationException";
import { HandshakeNotFoundException } from "./HandshakeNotFoundException";
import { InvalidHandshakeTransitionException } from "./InvalidHandshakeTransitionException";
import { HandshakeAlreadyInStateException } from "./HandshakeAlreadyInStateException";
import { InvalidInputException } from "./InvalidInputException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
export type AcceptHandshakeExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | HandshakeConstraintViolationException
  | HandshakeNotFoundException
  | InvalidHandshakeTransitionException
  | HandshakeAlreadyInStateException
  | InvalidInputException
  | ConcurrentModificationException
  | ServiceException
  | TooManyRequestsException
  | AccessDeniedForDependencyException;
