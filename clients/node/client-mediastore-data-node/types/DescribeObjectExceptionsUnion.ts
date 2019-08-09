import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type DescribeObjectExceptionsUnion =
  | ContainerNotFoundException
  | ObjectNotFoundException
  | InternalServerError;
