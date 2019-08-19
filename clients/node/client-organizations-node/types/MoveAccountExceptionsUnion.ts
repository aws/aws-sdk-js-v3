import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidInputException } from "./InvalidInputException";
import { SourceParentNotFoundException } from "./SourceParentNotFoundException";
import { DestinationParentNotFoundException } from "./DestinationParentNotFoundException";
import { DuplicateAccountException } from "./DuplicateAccountException";
import { AccountNotFoundException } from "./AccountNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ServiceException } from "./ServiceException";
export type MoveAccountExceptionsUnion =
  | AccessDeniedException
  | InvalidInputException
  | SourceParentNotFoundException
  | DestinationParentNotFoundException
  | DuplicateAccountException
  | AccountNotFoundException
  | TooManyRequestsException
  | ConcurrentModificationException
  | AWSOrganizationsNotInUseException
  | ServiceException;
