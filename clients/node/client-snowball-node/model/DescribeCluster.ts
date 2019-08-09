import { DescribeClusterInput } from "./DescribeClusterInput";
import { DescribeClusterOutput } from "./DescribeClusterOutput";
import { InvalidResourceException } from "./InvalidResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterInput
  },
  output: {
    shape: DescribeClusterOutput
  },
  errors: [
    {
      shape: InvalidResourceException
    }
  ]
};
