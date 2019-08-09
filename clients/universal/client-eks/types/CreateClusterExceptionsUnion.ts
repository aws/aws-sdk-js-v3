import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnsupportedAvailabilityZoneException } from "./UnsupportedAvailabilityZoneException";
export type CreateClusterExceptionsUnion =
  | ResourceInUseException
  | ResourceLimitExceededException
  | InvalidParameterException
  | ClientException
  | ServerException
  | ServiceUnavailableException
  | UnsupportedAvailabilityZoneException;
