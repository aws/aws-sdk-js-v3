import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { LimitExceededException } from "./LimitExceededException";
export type GetLifecyclePolicyExceptionsUnion =
  | ResourceNotFoundException
  | InternalServerException
  | LimitExceededException;
