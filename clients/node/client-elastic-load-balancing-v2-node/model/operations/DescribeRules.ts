import { DescribeRulesInput } from "../shapes/DescribeRulesInput";
import { DescribeRulesOutput } from "../shapes/DescribeRulesOutput";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { RuleNotFoundException } from "../shapes/RuleNotFoundException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRulesInput
  },
  output: {
    shape: DescribeRulesOutput,
    resultWrapper: "DescribeRulesResult"
  },
  errors: [
    {
      shape: ListenerNotFoundException
    },
    {
      shape: RuleNotFoundException
    },
    {
      shape: UnsupportedProtocolException
    }
  ]
};
