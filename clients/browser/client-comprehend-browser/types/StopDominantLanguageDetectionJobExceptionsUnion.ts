import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type StopDominantLanguageDetectionJobExceptionsUnion =
  | InvalidRequestException
  | JobNotFoundException
  | InternalServerException;
