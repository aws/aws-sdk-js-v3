import { GetPublicAccessBlockInput } from "../shapes/GetPublicAccessBlockInput";
import { GetPublicAccessBlockOutput } from "../shapes/GetPublicAccessBlockOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPublicAccessBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPublicAccessBlock",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?publicAccessBlock"
  },
  input: {
    shape: GetPublicAccessBlockInput
  },
  output: {
    shape: GetPublicAccessBlockOutput
  },
  errors: []
};
