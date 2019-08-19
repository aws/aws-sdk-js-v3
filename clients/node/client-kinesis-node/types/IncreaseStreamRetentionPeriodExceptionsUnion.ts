import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type IncreaseStreamRetentionPeriodExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException
  | LimitExceededException
  | InvalidArgumentException;
