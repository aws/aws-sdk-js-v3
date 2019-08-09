import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { DuplicatePolicyAttachmentException } from "./DuplicatePolicyAttachmentException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { PolicyTypeNotEnabledException } from "./PolicyTypeNotEnabledException";
import { ServiceException } from "./ServiceException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type AttachPolicyExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ConstraintViolationException
  | DuplicatePolicyAttachmentException
  | InvalidInputException
  | PolicyNotFoundException
  | PolicyTypeNotEnabledException
  | ServiceException
  | TargetNotFoundException
  | TooManyRequestsException;
