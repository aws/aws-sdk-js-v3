import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerException } from "./InternalServerException";
export type CreateLifecyclePolicyExceptionsUnion =
  | InvalidRequestException
  | LimitExceededException
  | InternalServerException;
