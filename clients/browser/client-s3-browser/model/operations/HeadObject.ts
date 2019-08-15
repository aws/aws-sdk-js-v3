import { HeadObjectInput } from "../shapes/HeadObjectInput";
import { HeadObjectOutput } from "../shapes/HeadObjectOutput";
import { NoSuchKey } from "../shapes/NoSuchKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const HeadObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "HeadObject",
  http: {
    method: "HEAD",
    requestUri: "/{Bucket}/{Key+}"
  },
  input: {
    shape: HeadObjectInput
  },
  output: {
    shape: HeadObjectOutput
  },
  errors: [
    {
      shape: NoSuchKey
    }
  ]
};
