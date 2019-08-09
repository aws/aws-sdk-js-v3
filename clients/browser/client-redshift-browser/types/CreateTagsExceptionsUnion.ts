import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type CreateTagsExceptionsUnion =
  | TagLimitExceededFault
  | ResourceNotFoundFault
  | InvalidTagFault;
