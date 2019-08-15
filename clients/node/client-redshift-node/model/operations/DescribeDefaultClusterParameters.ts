import { DescribeDefaultClusterParametersInput } from "../shapes/DescribeDefaultClusterParametersInput";
import { DescribeDefaultClusterParametersOutput } from "../shapes/DescribeDefaultClusterParametersOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDefaultClusterParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDefaultClusterParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDefaultClusterParametersInput
  },
  output: {
    shape: DescribeDefaultClusterParametersOutput,
    resultWrapper: "DescribeDefaultClusterParametersResult"
  },
  errors: []
};
