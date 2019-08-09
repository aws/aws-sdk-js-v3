import { GetPublicAccessBlockInput } from "./GetPublicAccessBlockInput";
import { GetPublicAccessBlockOutput } from "./GetPublicAccessBlockOutput";
import { NoSuchPublicAccessBlockConfiguration } from "./NoSuchPublicAccessBlockConfiguration";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPublicAccessBlock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPublicAccessBlock",
  http: {
    method: "GET",
    requestUri: "/v20180820/configuration/publicAccessBlock"
  },
  input: {
    shape: GetPublicAccessBlockInput
  },
  output: {
    shape: GetPublicAccessBlockOutput
  },
  errors: [
    {
      shape: NoSuchPublicAccessBlockConfiguration
    }
  ]
};
