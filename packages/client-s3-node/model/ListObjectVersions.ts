import { ListObjectVersionsInput } from "./ListObjectVersionsInput";
import { ListObjectVersionsOutput } from "./ListObjectVersionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListObjectVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListObjectVersions",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?versions"
  },
  input: {
    shape: ListObjectVersionsInput
  },
  output: {
    shape: ListObjectVersionsOutput
  },
  errors: []
};
