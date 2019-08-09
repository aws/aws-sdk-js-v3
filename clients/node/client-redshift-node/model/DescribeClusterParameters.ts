import { DescribeClusterParametersInput } from "./DescribeClusterParametersInput";
import { DescribeClusterParametersOutput } from "./DescribeClusterParametersOutput";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeClusterParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterParametersInput
  },
  output: {
    shape: DescribeClusterParametersOutput,
    resultWrapper: "DescribeClusterParametersResult"
  },
  errors: [
    {
      shape: ClusterParameterGroupNotFoundFault
    }
  ]
};
