import { DescribeAssessmentRunsInput } from "./DescribeAssessmentRunsInput";
import { DescribeAssessmentRunsOutput } from "./DescribeAssessmentRunsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
