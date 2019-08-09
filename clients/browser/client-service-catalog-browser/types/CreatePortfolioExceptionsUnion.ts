import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
export type CreatePortfolioExceptionsUnion =
  | InvalidParametersException
  | LimitExceededException
  | TagOptionNotMigratedException;
