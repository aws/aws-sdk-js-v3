import { DescribeImageAttributeInput } from "../shapes/DescribeImageAttributeInput";
import { DescribeImageAttributeOutput } from "../shapes/DescribeImageAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeImageAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImageAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImageAttributeInput
  },
  output: {
    shape: DescribeImageAttributeOutput
  },
  errors: []
};
