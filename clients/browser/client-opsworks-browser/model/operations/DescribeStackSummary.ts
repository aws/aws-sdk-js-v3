import { DescribeStackSummaryInput } from "../shapes/DescribeStackSummaryInput";
import { DescribeStackSummaryOutput } from "../shapes/DescribeStackSummaryOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStackSummary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackSummary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackSummaryInput
  },
  output: {
    shape: DescribeStackSummaryOutput
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
