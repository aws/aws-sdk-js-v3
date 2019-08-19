import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceInUseException } from "./ResourceInUseException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
export type DeletePortfolioExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParametersException
  | ResourceInUseException
  | TagOptionNotMigratedException;
