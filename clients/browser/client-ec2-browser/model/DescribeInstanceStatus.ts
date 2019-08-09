import { DescribeInstanceStatusInput } from "./DescribeInstanceStatusInput";
import { DescribeInstanceStatusOutput } from "./DescribeInstanceStatusOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeInstanceStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstanceStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstanceStatusInput
  },
  output: {
    shape: DescribeInstanceStatusOutput
  },
  errors: []
};
