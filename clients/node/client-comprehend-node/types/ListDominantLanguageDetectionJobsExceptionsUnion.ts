import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
export type ListDominantLanguageDetectionJobsExceptionsUnion =
  | InvalidRequestException
  | TooManyRequestsException
  | InvalidFilterException
  | InternalServerException;
