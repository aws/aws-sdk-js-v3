import { SetReceiptRulePositionInput } from "../shapes/SetReceiptRulePositionInput";
import { SetReceiptRulePositionOutput } from "../shapes/SetReceiptRulePositionOutput";
import { RuleSetDoesNotExistException } from "../shapes/RuleSetDoesNotExistException";
import { RuleDoesNotExistException } from "../shapes/RuleDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetReceiptRulePosition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetReceiptRulePosition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetReceiptRulePositionInput
  },
  output: {
    shape: SetReceiptRulePositionOutput,
    resultWrapper: "SetReceiptRulePositionResult"
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
