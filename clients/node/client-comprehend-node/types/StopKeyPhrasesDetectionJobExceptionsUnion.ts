import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type StopKeyPhrasesDetectionJobExceptionsUnion =
  | InvalidRequestException
  | JobNotFoundException
  | InternalServerException;
