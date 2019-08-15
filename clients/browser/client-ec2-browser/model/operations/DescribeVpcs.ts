import { DescribeVpcsInput } from "../shapes/DescribeVpcsInput";
import { DescribeVpcsOutput } from "../shapes/DescribeVpcsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpcs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcsInput
  },
  output: {
    shape: DescribeVpcsOutput
  },
  errors: []
};
