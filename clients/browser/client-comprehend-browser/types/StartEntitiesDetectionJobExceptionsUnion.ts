import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
export type StartEntitiesDetectionJobExceptionsUnion =
  | InvalidRequestException
  | TooManyRequestsException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | KmsKeyValidationException
  | InternalServerException;
