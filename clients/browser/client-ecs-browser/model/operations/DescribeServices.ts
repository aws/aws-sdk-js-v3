import { DescribeServicesInput } from "../shapes/DescribeServicesInput";
import { DescribeServicesOutput } from "../shapes/DescribeServicesOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServicesInput
  },
  output: {
    shape: DescribeServicesOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClusterNotFoundException
    }
  ]
};
