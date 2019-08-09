import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ParentNotFoundException } from "./ParentNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListAccountsForParentExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | InvalidInputException
  | ParentNotFoundException
  | ServiceException
  | TooManyRequestsException;
