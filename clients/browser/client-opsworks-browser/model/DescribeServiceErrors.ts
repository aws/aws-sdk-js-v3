import { DescribeServiceErrorsInput } from "./DescribeServiceErrorsInput";
import { DescribeServiceErrorsOutput } from "./DescribeServiceErrorsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
