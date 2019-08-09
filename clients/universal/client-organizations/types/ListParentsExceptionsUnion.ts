import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ChildNotFoundException } from "./ChildNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListParentsExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ChildNotFoundException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException;
