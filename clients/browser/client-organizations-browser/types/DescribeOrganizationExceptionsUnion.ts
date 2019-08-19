import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DescribeOrganizationExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | ConcurrentModificationException
  | ServiceException
  | TooManyRequestsException;
