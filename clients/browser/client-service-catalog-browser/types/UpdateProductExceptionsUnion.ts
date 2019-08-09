import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
export type UpdateProductExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParametersException
  | TagOptionNotMigratedException;
