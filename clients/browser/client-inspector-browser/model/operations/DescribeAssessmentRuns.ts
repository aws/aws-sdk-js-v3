import { DescribeAssessmentRunsInput } from "../shapes/DescribeAssessmentRunsInput";
import { DescribeAssessmentRunsOutput } from "../shapes/DescribeAssessmentRunsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAssessmentRuns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAssessmentRuns",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAssessmentRunsInput
  },
  output: {
    shape: DescribeAssessmentRunsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    }
  ]
};
