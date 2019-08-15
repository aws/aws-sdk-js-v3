import { DescribeDBClusterParametersInput } from "../shapes/DescribeDBClusterParametersInput";
import { DescribeDBClusterParametersOutput } from "../shapes/DescribeDBClusterParametersOutput";
import { DBParameterGroupNotFoundFault } from "../shapes/DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDBClusterParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBClusterParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBClusterParametersInput
  },
  output: {
    shape: DescribeDBClusterParametersOutput,
    resultWrapper: "DescribeDBClusterParametersResult"
  },
  errors: [
    {
      shape: DBParameterGroupNotFoundFault
    }
  ]
};
