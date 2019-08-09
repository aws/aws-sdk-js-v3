import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
export type GetTrailStatusExceptionsUnion =
  | TrailNotFoundException
  | InvalidTrailNameException;
