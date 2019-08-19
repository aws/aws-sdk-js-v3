import { CreateStorageLocationInput } from "../shapes/CreateStorageLocationInput";
import { CreateStorageLocationOutput } from "../shapes/CreateStorageLocationOutput";
import { TooManyBucketsException } from "../shapes/TooManyBucketsException";
import { S3SubscriptionRequiredException } from "../shapes/S3SubscriptionRequiredException";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
