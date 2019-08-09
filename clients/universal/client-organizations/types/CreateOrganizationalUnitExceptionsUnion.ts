import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { DuplicateOrganizationalUnitException } from "./DuplicateOrganizationalUnitException";
import { InvalidInputException } from "./InvalidInputException";
import { ParentNotFoundException } from "./ParentNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateOrganizationalUnitExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ConstraintViolationException
  | DuplicateOrganizationalUnitException
  | InvalidInputException
  | ParentNotFoundException
  | ServiceException
  | TooManyRequestsException;
