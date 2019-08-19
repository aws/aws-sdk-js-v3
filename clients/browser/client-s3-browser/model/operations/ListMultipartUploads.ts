import { ListMultipartUploadsInput } from "../shapes/ListMultipartUploadsInput";
import { ListMultipartUploadsOutput } from "../shapes/ListMultipartUploadsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMultipartUploads: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMultipartUploads",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?uploads"
  },
  input: {
    shape: ListMultipartUploadsInput
  },
  output: {
    shape: ListMultipartUploadsOutput
  },
  errors: []
};
