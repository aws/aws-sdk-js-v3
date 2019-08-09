import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
export type DescribeKeyPhrasesDetectionJobExceptionsUnion =
  | InvalidRequestException
  | JobNotFoundException
  | TooManyRequestsException
  | InternalServerException;
