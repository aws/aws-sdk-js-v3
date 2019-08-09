import { NotFoundException } from "./NotFoundException";
import { TagOperationException } from "./TagOperationException";
export type ListTagsForResourceExceptionsUnion =
  | NotFoundException
  | TagOperationException;
