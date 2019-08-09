import { DescribeDBClusterEndpointsInput } from "./DescribeDBClusterEndpointsInput";
import { DescribeDBClusterEndpointsOutput } from "./DescribeDBClusterEndpointsOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDBClusterEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBClusterEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBClusterEndpointsInput
  },
  output: {
    shape: DescribeDBClusterEndpointsOutput,
    resultWrapper: "DescribeDBClusterEndpointsResult"
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    }
  ]
};
