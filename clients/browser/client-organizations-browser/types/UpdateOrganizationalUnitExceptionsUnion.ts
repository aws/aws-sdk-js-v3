import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DuplicateOrganizationalUnitException } from "./DuplicateOrganizationalUnitException";
import { InvalidInputException } from "./InvalidInputException";
import { OrganizationalUnitNotFoundException } from "./OrganizationalUnitNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdateOrganizationalUnitExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | DuplicateOrganizationalUnitException
  | InvalidInputException
  | OrganizationalUnitNotFoundException
  | ServiceException
  | TooManyRequestsException;
