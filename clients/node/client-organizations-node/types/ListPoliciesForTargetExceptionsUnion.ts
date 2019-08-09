import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListPoliciesForTargetExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | InvalidInputException
  | ServiceException
  | TargetNotFoundException
  | TooManyRequestsException;
