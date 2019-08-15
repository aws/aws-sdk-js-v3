import { PutObjectInput } from "../shapes/PutObjectInput";
import { PutObjectOutput } from "../shapes/PutObjectOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutObject",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}/{Key+}"
  },
  input: {
    shape: PutObjectInput
  },
  output: {
    shape: PutObjectOutput
  },
  errors: []
};
