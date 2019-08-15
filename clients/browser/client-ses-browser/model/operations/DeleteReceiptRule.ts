import { DeleteReceiptRuleInput } from "../shapes/DeleteReceiptRuleInput";
import { DeleteReceiptRuleOutput } from "../shapes/DeleteReceiptRuleOutput";
import { RuleSetDoesNotExistException } from "../shapes/RuleSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
