import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type AdminForgetDeviceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | TooManyRequestsException
  | NotAuthorizedException
  | UserNotFoundException
  | InternalErrorException;
