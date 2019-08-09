import { AccessDeniedException } from "./AccessDeniedException";
import { AccountNotFoundException } from "./AccountNotFoundException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { MasterCannotLeaveOrganizationException } from "./MasterCannotLeaveOrganizationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type RemoveAccountFromOrganizationExceptionsUnion =
  | AccessDeniedException
  | AccountNotFoundException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ConstraintViolationException
  | InvalidInputException
  | MasterCannotLeaveOrganizationException
  | ServiceException
  | TooManyRequestsException;
