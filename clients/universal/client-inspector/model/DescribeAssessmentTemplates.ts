import { DescribeAssessmentTemplatesInput } from "./DescribeAssessmentTemplatesInput";
import { DescribeAssessmentTemplatesOutput } from "./DescribeAssessmentTemplatesOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
