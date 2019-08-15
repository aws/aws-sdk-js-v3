import { DescribeTransitGatewayVpcAttachmentsInput } from "../shapes/DescribeTransitGatewayVpcAttachmentsInput";
import { DescribeTransitGatewayVpcAttachmentsOutput } from "../shapes/DescribeTransitGatewayVpcAttachmentsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTransitGatewayVpcAttachments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTransitGatewayVpcAttachments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTransitGatewayVpcAttachmentsInput
  },
  output: {
    shape: DescribeTransitGatewayVpcAttachmentsOutput
  },
  errors: []
};
