import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServerException } from "./InternalServerException";
import { LimitExceededException } from "./LimitExceededException";
export type GetLifecyclePoliciesExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | InternalServerException
  | LimitExceededException;
