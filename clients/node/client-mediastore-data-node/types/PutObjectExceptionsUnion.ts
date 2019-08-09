import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type PutObjectExceptionsUnion =
  | ContainerNotFoundException
  | InternalServerError;
