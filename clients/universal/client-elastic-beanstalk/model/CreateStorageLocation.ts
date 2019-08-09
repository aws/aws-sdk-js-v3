import { CreateStorageLocationInput } from "./CreateStorageLocationInput";
import { CreateStorageLocationOutput } from "./CreateStorageLocationOutput";
import { TooManyBucketsException } from "./TooManyBucketsException";
import { S3SubscriptionRequiredException } from "./S3SubscriptionRequiredException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateStorageLocation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStorageLocation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStorageLocationInput
  },
  output: {
    shape: CreateStorageLocationOutput,
    resultWrapper: "CreateStorageLocationResult"
  },
  errors: [
    {
      shape: TooManyBucketsException
    },
    {
      shape: S3SubscriptionRequiredException
    },
    {
      shape: InsufficientPrivilegesException
    }
  ]
};
