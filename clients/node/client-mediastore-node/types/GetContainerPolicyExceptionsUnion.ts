import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type GetContainerPolicyExceptionsUnion =
  | ContainerInUseException
  | ContainerNotFoundException
  | PolicyNotFoundException
  | InternalServerError;
