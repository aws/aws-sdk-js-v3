import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ConstraintViolationException } from "./ConstraintViolationException";
import { InvalidInputException } from "./InvalidInputException";
import { FinalizingOrganizationException } from "./FinalizingOrganizationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnsupportedAPIEndpointException } from "./UnsupportedAPIEndpointException";
export type CreateAccountExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ConstraintViolationException
  | InvalidInputException
  | FinalizingOrganizationException
  | ServiceException
  | TooManyRequestsException
  | UnsupportedAPIEndpointException;
