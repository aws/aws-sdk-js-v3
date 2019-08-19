import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { TooManyBucketsException } from "./TooManyBucketsException";
export type UpdateConfigurationTemplateExceptionsUnion =
  | InsufficientPrivilegesException
  | TooManyBucketsException;
