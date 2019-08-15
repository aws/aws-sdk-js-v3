import { DescribeAssessmentTargetsInput } from "../shapes/DescribeAssessmentTargetsInput";
import { DescribeAssessmentTargetsOutput } from "../shapes/DescribeAssessmentTargetsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAssessmentTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAssessmentTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAssessmentTargetsInput
  },
  output: {
    shape: DescribeAssessmentTargetsOutput
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
