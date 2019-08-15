import { CreateBucketInput } from "../shapes/CreateBucketInput";
import { CreateBucketOutput } from "../shapes/CreateBucketOutput";
import { BucketAlreadyExists } from "../shapes/BucketAlreadyExists";
import { BucketAlreadyOwnedByYou } from "../shapes/BucketAlreadyOwnedByYou";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBucket: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBucket",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}"
  },
  input: {
    shape: CreateBucketInput
  },
  output: {
    shape: CreateBucketOutput
  },
  errors: [
    {
      shape: BucketAlreadyExists
    },
    {
      shape: BucketAlreadyOwnedByYou
    }
  ]
};
