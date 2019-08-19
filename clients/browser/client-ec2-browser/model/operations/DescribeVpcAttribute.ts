import { DescribeVpcAttributeInput } from "../shapes/DescribeVpcAttributeInput";
import { DescribeVpcAttributeOutput } from "../shapes/DescribeVpcAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpcAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcAttributeInput
  },
  output: {
    shape: DescribeVpcAttributeOutput
  },
  errors: []
};
