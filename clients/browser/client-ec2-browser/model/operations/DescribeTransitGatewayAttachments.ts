import { DescribeTransitGatewayAttachmentsInput } from "../shapes/DescribeTransitGatewayAttachmentsInput";
import { DescribeTransitGatewayAttachmentsOutput } from "../shapes/DescribeTransitGatewayAttachmentsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTransitGatewayAttachments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTransitGatewayAttachments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTransitGatewayAttachmentsInput
  },
  output: {
    shape: DescribeTransitGatewayAttachmentsOutput
  },
  errors: []
};
