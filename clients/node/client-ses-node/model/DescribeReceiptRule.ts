import { DescribeReceiptRuleInput } from "./DescribeReceiptRuleInput";
import { DescribeReceiptRuleOutput } from "./DescribeReceiptRuleOutput";
import { RuleDoesNotExistException } from "./RuleDoesNotExistException";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
