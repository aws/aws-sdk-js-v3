import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { NotAuthorizedException } from "./NotAuthorizedException";
export type AdminGetDeviceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | TooManyRequestsException
  | InternalErrorException
  | NotAuthorizedException;
