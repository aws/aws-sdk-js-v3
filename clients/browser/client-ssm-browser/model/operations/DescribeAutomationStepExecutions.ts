import { DescribeAutomationStepExecutionsInput } from "../shapes/DescribeAutomationStepExecutionsInput";
import { DescribeAutomationStepExecutionsOutput } from "../shapes/DescribeAutomationStepExecutionsOutput";
import { AutomationExecutionNotFoundException } from "../shapes/AutomationExecutionNotFoundException";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InvalidFilterKey } from "../shapes/InvalidFilterKey";
import { InvalidFilterValue } from "../shapes/InvalidFilterValue";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAutomationStepExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAutomationStepExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAutomationStepExecutionsInput
  },
  output: {
    shape: DescribeAutomationStepExecutionsOutput
  },
  errors: [
    {
      shape: AutomationExecutionNotFoundException
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InvalidFilterKey
    },
    {
      shape: InvalidFilterValue
    },
    {
      shape: InternalServerError
    }
  ]
};
