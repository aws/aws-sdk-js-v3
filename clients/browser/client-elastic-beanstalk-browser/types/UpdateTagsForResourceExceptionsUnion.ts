import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationInProgressException } from "./OperationInProgressException";
import { TooManyTagsException } from "./TooManyTagsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceTypeNotSupportedException } from "./ResourceTypeNotSupportedException";
export type UpdateTagsForResourceExceptionsUnion =
  | InsufficientPrivilegesException
  | OperationInProgressException
  | TooManyTagsException
  | ResourceNotFoundException
  | ResourceTypeNotSupportedException;
