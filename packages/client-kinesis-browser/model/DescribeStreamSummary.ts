import { DescribeStreamSummaryInput } from "./DescribeStreamSummaryInput";
import { DescribeStreamSummaryOutput } from "./DescribeStreamSummaryOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeStreamSummary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStreamSummary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStreamSummaryInput
  },
  output: {
    shape: DescribeStreamSummaryOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
