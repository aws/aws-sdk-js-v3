import { DescribeOrderableClusterOptionsInput } from "../shapes/DescribeOrderableClusterOptionsInput";
import { DescribeOrderableClusterOptionsOutput } from "../shapes/DescribeOrderableClusterOptionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeOrderableClusterOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOrderableClusterOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOrderableClusterOptionsInput
  },
  output: {
    shape: DescribeOrderableClusterOptionsOutput,
    resultWrapper: "DescribeOrderableClusterOptionsResult"
  },
  errors: []
};
