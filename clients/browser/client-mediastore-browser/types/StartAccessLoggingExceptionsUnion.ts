import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type StartAccessLoggingExceptionsUnion =
  | ContainerInUseException
  | ContainerNotFoundException
  | InternalServerError;
