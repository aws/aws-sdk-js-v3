import { DescribeReceiptRuleInput } from "../shapes/DescribeReceiptRuleInput";
import { DescribeReceiptRuleOutput } from "../shapes/DescribeReceiptRuleOutput";
import { RuleDoesNotExistException } from "../shapes/RuleDoesNotExistException";
import { RuleSetDoesNotExistException } from "../shapes/RuleSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReceiptRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReceiptRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReceiptRuleInput
  },
  output: {
    shape: DescribeReceiptRuleOutput,
    resultWrapper: "DescribeReceiptRuleResult"
  },
  errors: [
    {
      shape: RuleDoesNotExistException
    },
    {
      shape: RuleSetDoesNotExistException
    }
  ]
};
