import { InvalidParametersException } from "./InvalidParametersException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type AssociateBudgetWithResourceExceptionsUnion =
  | InvalidParametersException
  | DuplicateResourceException
  | LimitExceededException
  | ResourceNotFoundException;
