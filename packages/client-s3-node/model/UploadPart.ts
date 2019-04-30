import { UploadPartInput } from "./UploadPartInput";
import { UploadPartOutput } from "./UploadPartOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UploadPart: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadPart",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}/{Key+}"
  },
  input: {
    shape: UploadPartInput
  },
  output: {
    shape: UploadPartOutput
  },
  errors: []
};
