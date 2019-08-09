import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidInputException } from "./InvalidInputException";
import { OrganizationalUnitNotEmptyException } from "./OrganizationalUnitNotEmptyException";
import { OrganizationalUnitNotFoundException } from "./OrganizationalUnitNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteOrganizationalUnitExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | InvalidInputException
  | OrganizationalUnitNotEmptyException
  | OrganizationalUnitNotFoundException
  | ServiceException
  | TooManyRequestsException;
