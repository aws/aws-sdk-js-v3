import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { AccountOwnerNotVerifiedException } from "./AccountOwnerNotVerifiedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { HandshakeConstraintViolationException } from "./HandshakeConstraintViolationException";
import { DuplicateHandshakeException } from "./DuplicateHandshakeException";
import { InvalidInputException } from "./InvalidInputException";
import { FinalizingOrganizationException } from "./FinalizingOrganizationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type InviteAccountToOrganizationExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | AccountOwnerNotVerifiedException
  | ConcurrentModificationException
  | HandshakeConstraintViolationException
  | DuplicateHandshakeException
  | InvalidInputException
  | FinalizingOrganizationException
  | ServiceException
  | TooManyRequestsException;
