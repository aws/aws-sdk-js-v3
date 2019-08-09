import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListTagsForResourceExceptionsUnion =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException;
