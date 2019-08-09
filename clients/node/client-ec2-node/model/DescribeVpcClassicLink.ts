import { DescribeVpcClassicLinkInput } from "./DescribeVpcClassicLinkInput";
import { DescribeVpcClassicLinkOutput } from "./DescribeVpcClassicLinkOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeVpcClassicLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcClassicLink",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcClassicLinkInput
  },
  output: {
    shape: DescribeVpcClassicLinkOutput
  },
  errors: []
};
