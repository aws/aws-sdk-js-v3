import { PutBucketAccelerateConfigurationInput } from "./PutBucketAccelerateConfigurationInput";
import { PutBucketAccelerateConfigurationOutput } from "./PutBucketAccelerateConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutBucketAccelerateConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketAccelerateConfiguration",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?accelerate"
  },
  input: {
    shape: PutBucketAccelerateConfigurationInput
  },
  output: {
    shape: PutBucketAccelerateConfigurationOutput
  },
  errors: []
};
