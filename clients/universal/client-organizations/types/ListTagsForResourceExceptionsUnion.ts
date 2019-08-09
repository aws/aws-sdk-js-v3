import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListTagsForResourceExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | TargetNotFoundException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException;
