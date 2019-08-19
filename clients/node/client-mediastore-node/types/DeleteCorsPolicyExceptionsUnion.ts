import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { CorsPolicyNotFoundException } from "./CorsPolicyNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type DeleteCorsPolicyExceptionsUnion =
  | ContainerInUseException
  | ContainerNotFoundException
  | CorsPolicyNotFoundException
  | InternalServerError;
