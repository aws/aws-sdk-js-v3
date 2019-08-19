import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParametersException } from "./InvalidParametersException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
export type DeleteProductExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidParametersException
  | TagOptionNotMigratedException;
