import { DescribeAutomationStepExecutionsInput } from "./DescribeAutomationStepExecutionsInput";
import { DescribeAutomationStepExecutionsOutput } from "./DescribeAutomationStepExecutionsOutput";
import { AutomationExecutionNotFoundException } from "./AutomationExecutionNotFoundException";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidFilterValue } from "./InvalidFilterValue";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
