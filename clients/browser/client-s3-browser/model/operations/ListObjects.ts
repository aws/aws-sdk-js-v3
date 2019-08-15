import { ListObjectsInput } from "../shapes/ListObjectsInput";
import { ListObjectsOutput } from "../shapes/ListObjectsOutput";
import { NoSuchBucket } from "../shapes/NoSuchBucket";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListObjects: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListObjects",
  http: {
    method: "GET",
    requestUri: "/{Bucket}"
  },
  input: {
    shape: ListObjectsInput
  },
  output: {
    shape: ListObjectsOutput
  },
  errors: [
    {
      shape: NoSuchBucket
    }
  ]
};
