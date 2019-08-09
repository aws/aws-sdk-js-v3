import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type DeleteContainerExceptionsUnion =
  | ContainerInUseException
  | ContainerNotFoundException
  | InternalServerError;
