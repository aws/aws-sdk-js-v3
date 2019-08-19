import { CreateReceiptRuleSetInput } from "../shapes/CreateReceiptRuleSetInput";
import { CreateReceiptRuleSetOutput } from "../shapes/CreateReceiptRuleSetOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
