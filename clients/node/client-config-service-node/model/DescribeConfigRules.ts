import { DescribeConfigRulesInput } from "./DescribeConfigRulesInput";
import { DescribeConfigRulesOutput } from "./DescribeConfigRulesOutput";
import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeConfigRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigRulesInput
  },
  output: {
    shape: DescribeConfigRulesOutput
  },
  errors: [
    {
      shape: NoSuchConfigRuleException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
