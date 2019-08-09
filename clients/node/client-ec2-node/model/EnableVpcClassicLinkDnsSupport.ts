import { EnableVpcClassicLinkDnsSupportInput } from "./EnableVpcClassicLinkDnsSupportInput";
import { EnableVpcClassicLinkDnsSupportOutput } from "./EnableVpcClassicLinkDnsSupportOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableVpcClassicLinkDnsSupport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableVpcClassicLinkDnsSupport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableVpcClassicLinkDnsSupportInput
  },
  output: {
    shape: EnableVpcClassicLinkDnsSupportOutput
  },
  errors: []
};
