import { DeletePublicAccessBlockInput } from "./DeletePublicAccessBlockInput";
import { DeletePublicAccessBlockOutput } from "./DeletePublicAccessBlockOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePublicAccessBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePublicAccessBlock",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?publicAccessBlock"
  },
  input: {
    shape: DeletePublicAccessBlockInput
  },
  output: {
    shape: DeletePublicAccessBlockOutput
  },
  errors: []
};
