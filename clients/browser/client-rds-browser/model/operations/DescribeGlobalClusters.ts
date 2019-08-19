import { DescribeGlobalClustersInput } from "../shapes/DescribeGlobalClustersInput";
import { DescribeGlobalClustersOutput } from "../shapes/DescribeGlobalClustersOutput";
import { GlobalClusterNotFoundFault } from "../shapes/GlobalClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGlobalClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGlobalClusters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGlobalClustersInput
  },
  output: {
    shape: DescribeGlobalClustersOutput,
    resultWrapper: "DescribeGlobalClustersResult"
  },
  errors: [
    {
      shape: GlobalClusterNotFoundFault
    }
  ]
};
