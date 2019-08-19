import { DescribeApplicationInput } from "../shapes/DescribeApplicationInput";
import { DescribeApplicationOutput } from "../shapes/DescribeApplicationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeApplicationInput
  },
  output: {
    shape: DescribeApplicationOutput
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
