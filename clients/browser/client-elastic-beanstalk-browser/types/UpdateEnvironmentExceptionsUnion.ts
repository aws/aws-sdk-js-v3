import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { TooManyBucketsException } from "./TooManyBucketsException";
export type UpdateEnvironmentExceptionsUnion =
  | InsufficientPrivilegesException
  | TooManyBucketsException;
