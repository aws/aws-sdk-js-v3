import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { DuplicateResourceException } from "./DuplicateResourceException";
export type CreateConstraintExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParametersException
  | LimitExceededException
  | DuplicateResourceException;
