import { DescribeActiveReceiptRuleSetInput } from "./DescribeActiveReceiptRuleSetInput";
import { DescribeActiveReceiptRuleSetOutput } from "./DescribeActiveReceiptRuleSetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeActiveReceiptRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeActiveReceiptRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeActiveReceiptRuleSetInput
  },
  output: {
    shape: DescribeActiveReceiptRuleSetOutput,
    resultWrapper: "DescribeActiveReceiptRuleSetResult"
  },
  errors: []
};
