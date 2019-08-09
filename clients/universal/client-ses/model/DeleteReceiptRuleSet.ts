import { DeleteReceiptRuleSetInput } from "./DeleteReceiptRuleSetInput";
import { DeleteReceiptRuleSetOutput } from "./DeleteReceiptRuleSetOutput";
import { CannotDeleteException } from "./CannotDeleteException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteReceiptRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReceiptRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReceiptRuleSetInput
  },
  output: {
    shape: DeleteReceiptRuleSetOutput,
    resultWrapper: "DeleteReceiptRuleSetResult"
  },
  errors: [
    {
      shape: CannotDeleteException
    }
  ]
};
