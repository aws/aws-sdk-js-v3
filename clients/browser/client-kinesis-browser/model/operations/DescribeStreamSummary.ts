import { DescribeStreamSummaryInput } from "../shapes/DescribeStreamSummaryInput";
import { DescribeStreamSummaryOutput } from "../shapes/DescribeStreamSummaryOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
