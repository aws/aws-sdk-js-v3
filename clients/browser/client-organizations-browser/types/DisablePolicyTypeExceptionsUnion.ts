import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyTypeNotEnabledException } from "./PolicyTypeNotEnabledException";
import { RootNotFoundException } from "./RootNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DisablePolicyTypeExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ConstraintViolationException
  | InvalidInputException
  | PolicyTypeNotEnabledException
  | RootNotFoundException
  | ServiceException
  | TooManyRequestsException;
