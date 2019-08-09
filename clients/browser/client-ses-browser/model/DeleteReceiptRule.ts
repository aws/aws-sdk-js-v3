import { DeleteReceiptRuleInput } from "./DeleteReceiptRuleInput";
import { DeleteReceiptRuleOutput } from "./DeleteReceiptRuleOutput";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteReceiptRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReceiptRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReceiptRuleInput
  },
  output: {
    shape: DeleteReceiptRuleOutput,
    resultWrapper: "DeleteReceiptRuleResult"
  },
  errors: [
    {
      shape: RuleSetDoesNotExistException
    }
  ]
};
