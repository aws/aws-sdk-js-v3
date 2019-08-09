import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { LimitExceededException } from "./LimitExceededException";
export type DeleteLifecyclePolicyExceptionsUnion =
  | ResourceNotFoundException
  | InternalServerException
  | LimitExceededException;
