import { DescribeAssessmentTemplatesInput } from "../shapes/DescribeAssessmentTemplatesInput";
import { DescribeAssessmentTemplatesOutput } from "../shapes/DescribeAssessmentTemplatesOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAssessmentTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAssessmentTemplates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAssessmentTemplatesInput
  },
  output: {
    shape: DescribeAssessmentTemplatesOutput
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
