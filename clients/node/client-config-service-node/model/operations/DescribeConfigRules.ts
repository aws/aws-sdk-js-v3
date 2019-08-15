import { DescribeConfigRulesInput } from "../shapes/DescribeConfigRulesInput";
import { DescribeConfigRulesOutput } from "../shapes/DescribeConfigRulesOutput";
import { NoSuchConfigRuleException } from "../shapes/NoSuchConfigRuleException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
