import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
export type ListResourcesForTagOptionExceptionsUnion =
  | TagOptionNotMigratedException
  | ResourceNotFoundException
  | InvalidParametersException;
