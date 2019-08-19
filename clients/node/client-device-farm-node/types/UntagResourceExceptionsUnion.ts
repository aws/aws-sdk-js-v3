import { NotFoundException } from "./NotFoundException";
import { TagOperationException } from "./TagOperationException";
export type UntagResourceExceptionsUnion =
  | NotFoundException
  | TagOperationException;
