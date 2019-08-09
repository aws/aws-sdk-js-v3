import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidConfigurationException } from "./InvalidConfigurationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type SubscribeToDatasetExceptionsUnion =
  | NotAuthorizedException
  | InvalidParameterException
  | ResourceNotFoundException
  | InternalErrorException
  | InvalidConfigurationException
  | TooManyRequestsException;
