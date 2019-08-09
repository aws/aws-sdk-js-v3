import { SetActiveReceiptRuleSetInput } from "./SetActiveReceiptRuleSetInput";
import { SetActiveReceiptRuleSetOutput } from "./SetActiveReceiptRuleSetOutput";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetActiveReceiptRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetActiveReceiptRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetActiveReceiptRuleSetInput
  },
  output: {
    shape: SetActiveReceiptRuleSetOutput,
    resultWrapper: "SetActiveReceiptRuleSetResult"
  },
  errors: [
    {
      shape: RuleSetDoesNotExistException
    }
  ]
};
