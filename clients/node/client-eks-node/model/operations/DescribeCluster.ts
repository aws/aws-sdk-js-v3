import { DescribeClusterInput } from "../shapes/DescribeClusterInput";
import { DescribeClusterOutput } from "../shapes/DescribeClusterOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
