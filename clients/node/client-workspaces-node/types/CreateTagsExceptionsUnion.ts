import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
export type CreateTagsExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterValuesException
  | ResourceLimitExceededException;
