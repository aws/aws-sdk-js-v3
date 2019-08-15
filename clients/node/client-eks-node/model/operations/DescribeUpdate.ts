import { DescribeUpdateInput } from "../shapes/DescribeUpdateInput";
import { DescribeUpdateOutput } from "../shapes/DescribeUpdateOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUpdate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUpdate",
  http: {
    method: "GET",
    requestUri: "/clusters/{name}/updates/{updateId}"
  },
  input: {
    shape: DescribeUpdateInput
  },
  output: {
    shape: DescribeUpdateOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServerException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
