import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { NotAuthorizedException } from "./NotAuthorizedException";
export type AdminListDevicesExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | InvalidUserPoolConfigurationException
  | TooManyRequestsException
  | InternalErrorException
  | NotAuthorizedException;
