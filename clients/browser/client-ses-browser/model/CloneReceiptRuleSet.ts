import { CloneReceiptRuleSetInput } from "./CloneReceiptRuleSetInput";
import { CloneReceiptRuleSetOutput } from "./CloneReceiptRuleSetOutput";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
