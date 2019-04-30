import { ListObjectsV2Input } from "./ListObjectsV2Input";
import { ListObjectsV2Output } from "./ListObjectsV2Output";
import { NoSuchBucket } from "./NoSuchBucket";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListObjectsV2: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListObjectsV2",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?list-type=2"
  },
  input: {
    shape: ListObjectsV2Input
  },
  output: {
    shape: ListObjectsV2Output
  },
  errors: [
    {
      shape: NoSuchBucket
    }
  ]
};
