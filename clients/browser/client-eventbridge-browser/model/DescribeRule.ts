import { DescribeRuleInput } from "./DescribeRuleInput";
import { DescribeRuleOutput } from "./DescribeRuleOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRuleInput
  },
  output: {
    shape: DescribeRuleOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalException
    }
  ]
};
