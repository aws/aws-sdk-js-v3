import { DescribeAlgorithmInput } from "./DescribeAlgorithmInput";
import { DescribeAlgorithmOutput } from "./DescribeAlgorithmOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAlgorithm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAlgorithm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAlgorithmInput
  },
  output: {
    shape: DescribeAlgorithmOutput
  },
  errors: []
};
