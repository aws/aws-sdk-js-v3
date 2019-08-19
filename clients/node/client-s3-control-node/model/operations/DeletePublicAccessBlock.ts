import { DeletePublicAccessBlockInput } from "../shapes/DeletePublicAccessBlockInput";
import { DeletePublicAccessBlockOutput } from "../shapes/DeletePublicAccessBlockOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePublicAccessBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePublicAccessBlock",
  http: {
    method: "DELETE",
    requestUri: "/v20180820/configuration/publicAccessBlock"
  },
  input: {
    shape: DeletePublicAccessBlockInput
  },
  output: {
    shape: DeletePublicAccessBlockOutput
  },
  errors: []
};
