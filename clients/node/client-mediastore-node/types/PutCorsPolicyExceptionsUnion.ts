import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ContainerInUseException } from "./ContainerInUseException";
import { InternalServerError } from "./InternalServerError";
export type PutCorsPolicyExceptionsUnion =
  | ContainerNotFoundException
  | ContainerInUseException
  | InternalServerError;
