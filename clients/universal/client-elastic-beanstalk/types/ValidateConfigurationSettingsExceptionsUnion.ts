import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { TooManyBucketsException } from "./TooManyBucketsException";
export type ValidateConfigurationSettingsExceptionsUnion =
  | InsufficientPrivilegesException
  | TooManyBucketsException;
