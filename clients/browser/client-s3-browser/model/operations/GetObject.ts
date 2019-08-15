import { GetObjectInput } from "../shapes/GetObjectInput";
import { GetObjectOutput } from "../shapes/GetObjectOutput";
import { NoSuchKey } from "../shapes/NoSuchKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetObject",
  http: {
    method: "GET",
    requestUri: "/{Bucket}/{Key+}"
  },
  input: {
    shape: GetObjectInput
  },
  output: {
    shape: GetObjectOutput
  },
  errors: [
    {
      shape: NoSuchKey
    }
  ]
};
