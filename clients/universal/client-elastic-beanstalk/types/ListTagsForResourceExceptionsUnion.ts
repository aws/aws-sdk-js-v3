import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
export type ListTagsForResourceExceptionsUnion =
  | InsufficientPrivilegesException
  | ResourceNotFoundException
  | ResourceTypeNotSupportedException;
