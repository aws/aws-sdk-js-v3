import { DescribeStacksInput } from "./DescribeStacksInput";
import { DescribeStacksOutput } from "./DescribeStacksOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeStacks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStacks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStacksInput
  },
  output: {
    shape: DescribeStacksOutput
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
