import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteTagOptionExceptionsUnion =
  | TagOptionNotMigratedException
  | ResourceInUseException
  | ResourceNotFoundException;
