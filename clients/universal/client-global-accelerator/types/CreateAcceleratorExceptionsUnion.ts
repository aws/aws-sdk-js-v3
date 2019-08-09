import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateAcceleratorExceptionsUnion =
  | InternalServiceErrorException
  | InvalidArgumentException
  | LimitExceededException;
