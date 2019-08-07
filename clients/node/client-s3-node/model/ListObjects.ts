import { ListObjectsInput } from "./ListObjectsInput";
import { ListObjectsOutput } from "./ListObjectsOutput";
import { NoSuchBucket } from "./NoSuchBucket";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
