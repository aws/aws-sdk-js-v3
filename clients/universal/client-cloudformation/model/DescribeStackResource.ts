import { DescribeStackResourceInput } from "./DescribeStackResourceInput";
import { DescribeStackResourceOutput } from "./DescribeStackResourceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeStackResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackResourceInput
  },
  output: {
    shape: DescribeStackResourceOutput,
    resultWrapper: "DescribeStackResourceResult"
  },
  errors: []
};
