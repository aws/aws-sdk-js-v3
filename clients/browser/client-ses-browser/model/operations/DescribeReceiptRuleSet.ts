import { DescribeReceiptRuleSetInput } from "../shapes/DescribeReceiptRuleSetInput";
import { DescribeReceiptRuleSetOutput } from "../shapes/DescribeReceiptRuleSetOutput";
import { RuleSetDoesNotExistException } from "../shapes/RuleSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReceiptRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReceiptRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReceiptRuleSetInput
  },
  output: {
    shape: DescribeReceiptRuleSetOutput,
    resultWrapper: "DescribeReceiptRuleSetResult"
  },
  errors: [
    {
      shape: RuleSetDoesNotExistException
    }
  ]
};
