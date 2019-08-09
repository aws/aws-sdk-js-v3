import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type StopAccessLoggingExceptionsUnion =
  | ContainerInUseException
  | ContainerNotFoundException
  | InternalServerError;
