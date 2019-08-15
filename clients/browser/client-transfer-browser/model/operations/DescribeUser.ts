import { DescribeUserInput } from "../shapes/DescribeUserInput";
import { DescribeUserOutput } from "../shapes/DescribeUserOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserInput
  },
  output: {
    shape: DescribeUserOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
