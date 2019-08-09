import { DescribeRulesInput } from "./DescribeRulesInput";
import { DescribeRulesOutput } from "./DescribeRulesOutput";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { RuleNotFoundException } from "./RuleNotFoundException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
