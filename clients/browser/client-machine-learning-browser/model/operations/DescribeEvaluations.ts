import { DescribeEvaluationsInput } from "../shapes/DescribeEvaluationsInput";
import { DescribeEvaluationsOutput } from "../shapes/DescribeEvaluationsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEvaluations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEvaluations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEvaluationsInput
  },
  output: {
    shape: DescribeEvaluationsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServerException
    }
  ]
};
