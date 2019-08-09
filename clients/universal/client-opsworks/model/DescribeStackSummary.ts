import { DescribeStackSummaryInput } from "./DescribeStackSummaryInput";
import { DescribeStackSummaryOutput } from "./DescribeStackSummaryOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
