import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
export type MergeShardsExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | LimitExceededException;
