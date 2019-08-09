import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type DeleteObjectExceptionsUnion =
  | ContainerNotFoundException
  | ObjectNotFoundException
  | InternalServerError;
