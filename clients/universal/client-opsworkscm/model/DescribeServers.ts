import { DescribeServersInput } from "./DescribeServersInput";
import { DescribeServersOutput } from "./DescribeServersOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
