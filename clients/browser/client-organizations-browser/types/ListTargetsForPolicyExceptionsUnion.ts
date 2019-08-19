import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListTargetsForPolicyExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | InvalidInputException
  | PolicyNotFoundException
  | ServiceException
  | TooManyRequestsException;
