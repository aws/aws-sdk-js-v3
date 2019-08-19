import { AccessDeniedException } from "./AccessDeniedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UntagResourceExceptionsUnion =
  | AccessDeniedException
  | ConcurrentModificationException
  | AWSOrganizationsNotInUseException
  | TargetNotFoundException
  | ConstraintViolationException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException;
