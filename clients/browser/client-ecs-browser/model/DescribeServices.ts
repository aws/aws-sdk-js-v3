import { DescribeServicesInput } from "./DescribeServicesInput";
import { DescribeServicesOutput } from "./DescribeServicesOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
