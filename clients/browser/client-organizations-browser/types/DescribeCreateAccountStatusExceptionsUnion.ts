import { AccessDeniedException } from "./AccessDeniedException";
import { AWSOrganizationsNotInUseException } from "./AWSOrganizationsNotInUseException";
import { CreateAccountStatusNotFoundException } from "./CreateAccountStatusNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnsupportedAPIEndpointException } from "./UnsupportedAPIEndpointException";
export type DescribeCreateAccountStatusExceptionsUnion =
  | AccessDeniedException
  | AWSOrganizationsNotInUseException
  | CreateAccountStatusNotFoundException
  | InvalidInputException
  | ServiceException
  | TooManyRequestsException
  | UnsupportedAPIEndpointException;
