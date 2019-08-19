import { PutPublicAccessBlockInput } from "../shapes/PutPublicAccessBlockInput";
import { PutPublicAccessBlockOutput } from "../shapes/PutPublicAccessBlockOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutPublicAccessBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutPublicAccessBlock",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?publicAccessBlock"
  },
  input: {
    shape: PutPublicAccessBlockInput
  },
  output: {
    shape: PutPublicAccessBlockOutput
  },
  errors: []
};
