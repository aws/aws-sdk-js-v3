import { AccessDeniedException } from "./AccessDeniedException";
import { AlreadyInOrganizationException } from "./AlreadyInOrganizationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
export type CreateOrganizationExceptionsUnion =
  | AccessDeniedException
  | AlreadyInOrganizationException
  | ConcurrentModificationException
  | ConstraintViolationException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException
  | AccessDeniedForDependencyException;
