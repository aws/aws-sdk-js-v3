import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
export type CreateProductExceptionsUnion =
  | InvalidParametersException
  | LimitExceededException
  | TagOptionNotMigratedException;
