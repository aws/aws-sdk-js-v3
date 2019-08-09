import { TooManyApplicationsException } from "./TooManyApplicationsException";
import { TooManyApplicationVersionsException } from "./TooManyApplicationVersionsException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { S3LocationNotInServiceRegionException } from "./S3LocationNotInServiceRegionException";
import { CodeBuildNotInServiceRegionException } from "./CodeBuildNotInServiceRegionException";
export type CreateApplicationVersionExceptionsUnion =
  | TooManyApplicationsException
  | TooManyApplicationVersionsException
  | InsufficientPrivilegesException
  | S3LocationNotInServiceRegionException
  | CodeBuildNotInServiceRegionException;
