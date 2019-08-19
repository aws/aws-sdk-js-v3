import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type StopEntitiesDetectionJobExceptionsUnion =
  | InvalidRequestException
  | JobNotFoundException
  | InternalServerException;
