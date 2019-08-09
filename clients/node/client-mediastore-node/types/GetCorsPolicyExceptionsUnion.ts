import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { CorsPolicyNotFoundException } from "./CorsPolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type GetCorsPolicyExceptionsUnion =
  | ContainerInUseException
  | ContainerNotFoundException
  | CorsPolicyNotFoundException
  | InternalServerError;
