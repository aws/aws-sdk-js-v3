import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { KmsKeyValidationException } from "./KmsKeyValidationException";
import { InternalServerException } from "./InternalServerException";
export type StartDominantLanguageDetectionJobExceptionsUnion =
  | InvalidRequestException
  | TooManyRequestsException
  | KmsKeyValidationException
  | InternalServerException;
