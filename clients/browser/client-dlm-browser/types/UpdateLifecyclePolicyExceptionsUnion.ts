import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServerException } from "./InternalServerException";
import { LimitExceededException } from "./LimitExceededException";
export type UpdateLifecyclePolicyExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | InternalServerException
  | LimitExceededException;
