import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
export type UpdatePortfolioExceptionsUnion =
  | InvalidParametersException
  | ResourceNotFoundException
  | LimitExceededException
  | TagOptionNotMigratedException;
