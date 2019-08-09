import { DescribeVpcClassicLinkDnsSupportInput } from "./DescribeVpcClassicLinkDnsSupportInput";
import { DescribeVpcClassicLinkDnsSupportOutput } from "./DescribeVpcClassicLinkDnsSupportOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeVpcClassicLinkDnsSupport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcClassicLinkDnsSupport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcClassicLinkDnsSupportInput
  },
  output: {
    shape: DescribeVpcClassicLinkDnsSupportOutput
  },
  errors: []
};
