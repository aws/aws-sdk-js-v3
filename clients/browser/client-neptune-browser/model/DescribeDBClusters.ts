import { DescribeDBClustersInput } from "./DescribeDBClustersInput";
import { DescribeDBClustersOutput } from "./DescribeDBClustersOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDBClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBClusters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBClustersInput
  },
  output: {
    shape: DescribeDBClustersOutput,
    resultWrapper: "DescribeDBClustersResult"
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    }
  ]
};
