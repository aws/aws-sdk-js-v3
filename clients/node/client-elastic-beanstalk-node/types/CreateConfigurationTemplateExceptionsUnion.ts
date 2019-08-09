import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { TooManyBucketsException } from "./TooManyBucketsException";
import { TooManyConfigurationTemplatesException } from "./TooManyConfigurationTemplatesException";
export type CreateConfigurationTemplateExceptionsUnion =
  | InsufficientPrivilegesException
  | TooManyBucketsException
  | TooManyConfigurationTemplatesException;
