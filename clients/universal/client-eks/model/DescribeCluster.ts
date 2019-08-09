import { DescribeClusterInput } from "./DescribeClusterInput";
import { DescribeClusterOutput } from "./DescribeClusterOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCluster",
  http: {
    method: "GET",
    requestUri: "/clusters/{name}"
  },
  input: {
    shape: DescribeClusterInput
  },
  output: {
    shape: DescribeClusterOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ClientException
    },
    {
      shape: ServerException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
