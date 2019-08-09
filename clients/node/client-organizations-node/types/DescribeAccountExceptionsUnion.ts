import { AccessDeniedException } from "./AccessDeniedException";
import { AccountNotFoundException } from "./AccountNotFoundException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DescribeAccountExceptionsUnion =
  | AccessDeniedException
  | AccountNotFoundException
  | AWSOrganizationsNotInUseException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException;
