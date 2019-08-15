import { DisableVpcClassicLinkDnsSupportInput } from "../shapes/DisableVpcClassicLinkDnsSupportInput";
import { DisableVpcClassicLinkDnsSupportOutput } from "../shapes/DisableVpcClassicLinkDnsSupportOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableVpcClassicLinkDnsSupport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableVpcClassicLinkDnsSupport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableVpcClassicLinkDnsSupportInput
  },
  output: {
    shape: DisableVpcClassicLinkDnsSupportOutput
  },
  errors: []
};
