import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyTypeAlreadyEnabledException } from "./PolicyTypeAlreadyEnabledException";
import { RootNotFoundException } from "./RootNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PolicyTypeNotAvailableForOrganizationException } from "./PolicyTypeNotAvailableForOrganizationException";
export type EnablePolicyTypeExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ConstraintViolationException
  | InvalidInputException
  | PolicyTypeAlreadyEnabledException
  | RootNotFoundException
  | ServiceException
  | TooManyRequestsException
  | PolicyTypeNotAvailableForOrganizationException;
