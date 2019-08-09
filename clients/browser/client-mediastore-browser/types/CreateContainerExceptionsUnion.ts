import { ContainerInUseException } from "./ContainerInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerError } from "./InternalServerError";
export type CreateContainerExceptionsUnion =
  | ContainerInUseException
  | LimitExceededException
  | InternalServerError;
