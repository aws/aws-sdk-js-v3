import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type RegisterStreamConsumerExceptionsUnion =
  | InvalidArgumentException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException;
