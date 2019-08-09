import { DescribeTargetGroupAttributesInput } from "./DescribeTargetGroupAttributesInput";
import { DescribeTargetGroupAttributesOutput } from "./DescribeTargetGroupAttributesOutput";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTargetGroupAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTargetGroupAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTargetGroupAttributesInput
  },
  output: {
    shape: DescribeTargetGroupAttributesOutput,
    resultWrapper: "DescribeTargetGroupAttributesResult"
  },
  errors: [
    {
      shape: TargetGroupNotFoundException
    }
  ]
};
