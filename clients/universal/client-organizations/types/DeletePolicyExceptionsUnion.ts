import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyInUseException } from "./PolicyInUseException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeletePolicyExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | InvalidInputException
  | PolicyInUseException
  | PolicyNotFoundException
  | ServiceException
  | TooManyRequestsException;
