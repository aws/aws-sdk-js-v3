import { DescribeComponentInput } from "./DescribeComponentInput";
import { DescribeComponentOutput } from "./DescribeComponentOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeComponent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeComponent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeComponentInput
  },
  output: {
    shape: DescribeComponentOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalServerException
    }
  ]
};
