import { DescribeServiceErrorsInput } from "../shapes/DescribeServiceErrorsInput";
import { DescribeServiceErrorsOutput } from "../shapes/DescribeServiceErrorsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServiceErrors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServiceErrors",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServiceErrorsInput
  },
  output: {
    shape: DescribeServiceErrorsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
