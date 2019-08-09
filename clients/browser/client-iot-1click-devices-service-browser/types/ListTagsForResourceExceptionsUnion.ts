import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
export type ListTagsForResourceExceptionsUnion =
  | ResourceNotFoundException
  | InternalFailureException;
