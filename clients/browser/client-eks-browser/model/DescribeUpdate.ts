import { DescribeUpdateInput } from "./DescribeUpdateInput";
import { DescribeUpdateOutput } from "./DescribeUpdateOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
