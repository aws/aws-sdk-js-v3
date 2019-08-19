import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { RequestedRangeNotSatisfiableException } from "./RequestedRangeNotSatisfiableException";
import { InternalServerError } from "./InternalServerError";
export type GetObjectExceptionsUnion =
  | ContainerNotFoundException
  | ObjectNotFoundException
  | RequestedRangeNotSatisfiableException
  | InternalServerError;
