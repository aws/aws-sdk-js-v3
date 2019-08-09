import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListAWSServiceAccessForOrganizationExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConstraintViolationException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException;
