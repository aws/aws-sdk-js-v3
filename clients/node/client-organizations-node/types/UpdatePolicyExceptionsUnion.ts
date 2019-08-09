import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { DuplicatePolicyException } from "./DuplicatePolicyException";
import { InvalidInputException } from "./InvalidInputException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdatePolicyExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ConstraintViolationException
  | DuplicatePolicyException
  | InvalidInputException
  | MalformedPolicyDocumentException
  | PolicyNotFoundException
  | ServiceException
  | TooManyRequestsException;
