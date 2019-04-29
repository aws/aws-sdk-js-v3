import { ListBucketsInput } from "./ListBucketsInput";
import { ListBucketsOutput } from "./ListBucketsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListBuckets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBuckets",
  http: {
    method: "GET",
    requestUri: "/"
  },
  input: {
    shape: ListBucketsInput
  },
  output: {
    shape: ListBucketsOutput
  },
  errors: []
};
