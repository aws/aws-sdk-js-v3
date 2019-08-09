import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotAttachedException } from "./PolicyNotAttachedException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ServiceException } from "./ServiceException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DetachPolicyExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ConstraintViolationException
  | InvalidInputException
  | PolicyNotAttachedException
  | PolicyNotFoundException
  | ServiceException
  | TargetNotFoundException
  | TooManyRequestsException;
