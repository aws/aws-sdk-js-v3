import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidIdentityPoolConfigurationException } from "./InvalidIdentityPoolConfigurationException";
import { InternalErrorException } from "./InternalErrorException";
import { ExternalServiceException } from "./ExternalServiceException";
export type GetCredentialsForIdentityExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | NotAuthorizedException
  | ResourceConflictException
  | TooManyRequestsException
  | InvalidIdentityPoolConfigurationException
  | InternalErrorException
  | ExternalServiceException;
