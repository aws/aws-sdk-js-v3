import { DescribeAutomationExecutionsInput } from "./DescribeAutomationExecutionsInput";
import { DescribeAutomationExecutionsOutput } from "./DescribeAutomationExecutionsOutput";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidFilterValue } from "./InvalidFilterValue";
import { InvalidNextToken } from "./InvalidNextToken";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
