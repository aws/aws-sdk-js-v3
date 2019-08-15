import { HeadBucketInput } from "../shapes/HeadBucketInput";
import { HeadBucketOutput } from "../shapes/HeadBucketOutput";
import { NoSuchBucket } from "../shapes/NoSuchBucket";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const HeadBucket: _Operation_ = {
  metadata: ServiceMetadata,
  name: "HeadBucket",
  http: {
    method: "HEAD",
    requestUri: "/{Bucket}"
  },
  input: {
    shape: HeadBucketInput
  },
  output: {
    shape: HeadBucketOutput
  },
  errors: [
    {
      shape: NoSuchBucket
    }
  ]
};
