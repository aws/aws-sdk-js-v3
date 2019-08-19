import { CloneReceiptRuleSetInput } from "../shapes/CloneReceiptRuleSetInput";
import { CloneReceiptRuleSetOutput } from "../shapes/CloneReceiptRuleSetOutput";
import { RuleSetDoesNotExistException } from "../shapes/RuleSetDoesNotExistException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CloneReceiptRuleSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CloneReceiptRuleSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CloneReceiptRuleSetInput
  },
  output: {
    shape: CloneReceiptRuleSetOutput,
    resultWrapper: "CloneReceiptRuleSetResult"
  },
  errors: [
    {
      shape: RuleSetDoesNotExistException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
