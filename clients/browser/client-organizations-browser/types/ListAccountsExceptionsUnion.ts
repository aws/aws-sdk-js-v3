import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListAccountsExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException;
