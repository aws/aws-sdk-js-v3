import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type PutLifecyclePolicyExceptionsUnion =
  | ContainerInUseException
  | ContainerNotFoundException
  | InternalServerError;
