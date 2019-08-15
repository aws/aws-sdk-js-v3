import { DescribeServersInput } from "../shapes/DescribeServersInput";
import { DescribeServersOutput } from "../shapes/DescribeServersOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServersInput
  },
  output: {
    shape: DescribeServersOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
