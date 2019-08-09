import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
export type StartKeyPhrasesDetectionJobExceptionsUnion =
  | InvalidRequestException
  | TooManyRequestsException
  | KmsKeyValidationException
  | InternalServerException;
