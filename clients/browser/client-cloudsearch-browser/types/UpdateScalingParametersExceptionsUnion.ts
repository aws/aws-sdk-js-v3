import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidTypeException } from "./InvalidTypeException";
export type UpdateScalingParametersExceptionsUnion =
  | BaseException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | InvalidTypeException;
