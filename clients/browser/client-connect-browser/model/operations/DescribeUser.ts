import { DescribeUserInput } from "../shapes/DescribeUserInput";
import { DescribeUserOutput } from "../shapes/DescribeUserOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUser",
  http: {
    method: "GET",
    requestUri: "/users/{InstanceId}/{UserId}"
  },
  input: {
    shape: DescribeUserInput
  },
  output: {
    shape: DescribeUserOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceException
    }
  ]
};
