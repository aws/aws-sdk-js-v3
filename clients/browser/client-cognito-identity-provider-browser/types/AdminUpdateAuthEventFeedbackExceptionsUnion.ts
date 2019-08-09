import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserPoolAddOnNotEnabledException } from "./UserPoolAddOnNotEnabledException";
import { InternalErrorException } from "./InternalErrorException";
export type AdminUpdateAuthEventFeedbackExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserNotFoundException
  | UserPoolAddOnNotEnabledException
  | InternalErrorException;
