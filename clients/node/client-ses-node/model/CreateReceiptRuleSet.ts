import { CreateReceiptRuleSetInput } from "./CreateReceiptRuleSetInput";
import { CreateReceiptRuleSetOutput } from "./CreateReceiptRuleSetOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateReceiptRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReceiptRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReceiptRuleSetInput
  },
  output: {
    shape: CreateReceiptRuleSetOutput,
    resultWrapper: "CreateReceiptRuleSetResult"
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
