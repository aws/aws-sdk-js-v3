import { ReorderReceiptRuleSetInput } from "./ReorderReceiptRuleSetInput";
import { ReorderReceiptRuleSetOutput } from "./ReorderReceiptRuleSetOutput";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { RuleDoesNotExistException } from "./RuleDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ReorderReceiptRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReorderReceiptRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReorderReceiptRuleSetInput
  },
  output: {
    shape: ReorderReceiptRuleSetOutput,
    resultWrapper: "ReorderReceiptRuleSetResult"
  },
  errors: [
    {
      shape: RuleSetDoesNotExistException
    },
    {
      shape: RuleDoesNotExistException
    }
  ]
};
