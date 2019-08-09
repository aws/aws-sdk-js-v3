import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type ListItemsExceptionsUnion =
  | ContainerNotFoundException
  | InternalServerError;
