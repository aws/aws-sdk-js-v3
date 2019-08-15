import { ReorderReceiptRuleSetInput } from "../shapes/ReorderReceiptRuleSetInput";
import { ReorderReceiptRuleSetOutput } from "../shapes/ReorderReceiptRuleSetOutput";
import { RuleSetDoesNotExistException } from "../shapes/RuleSetDoesNotExistException";
import { RuleDoesNotExistException } from "../shapes/RuleDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
