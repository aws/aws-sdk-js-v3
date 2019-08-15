import { DescribeAutomationExecutionsInput } from "../shapes/DescribeAutomationExecutionsInput";
import { DescribeAutomationExecutionsOutput } from "../shapes/DescribeAutomationExecutionsOutput";
import { InvalidFilterKey } from "../shapes/InvalidFilterKey";
import { InvalidFilterValue } from "../shapes/InvalidFilterValue";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAutomationExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAutomationExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAutomationExecutionsInput
  },
  output: {
    shape: DescribeAutomationExecutionsOutput
  },
  errors: [
    {
      shape: InvalidFilterKey
    },
    {
      shape: InvalidFilterValue
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InternalServerError
    }
  ]
};
