import { DescribeComponentInput } from "../shapes/DescribeComponentInput";
import { DescribeComponentOutput } from "../shapes/DescribeComponentOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
