import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ContainerInUseException } from "./ContainerInUseException";
import { InternalServerError } from "./InternalServerError";
export type PutContainerPolicyExceptionsUnion =
  | ContainerNotFoundException
  | ContainerInUseException
  | InternalServerError;
