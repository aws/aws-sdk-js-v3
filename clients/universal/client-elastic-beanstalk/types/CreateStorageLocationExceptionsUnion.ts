import { TooManyBucketsException } from "./TooManyBucketsException";
import { S3SubscriptionRequiredException } from "./S3SubscriptionRequiredException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
export type CreateStorageLocationExceptionsUnion =
  | TooManyBucketsException
  | S3SubscriptionRequiredException
  | InsufficientPrivilegesException;
