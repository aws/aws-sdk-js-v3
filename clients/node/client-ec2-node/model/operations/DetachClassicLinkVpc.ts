import { DetachClassicLinkVpcInput } from "../shapes/DetachClassicLinkVpcInput";
import { DetachClassicLinkVpcOutput } from "../shapes/DetachClassicLinkVpcOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachClassicLinkVpc: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachClassicLinkVpc",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachClassicLinkVpcInput
  },
  output: {
    shape: DetachClassicLinkVpcOutput
  },
  errors: []
};
