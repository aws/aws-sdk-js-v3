import { UpdateReceiptRuleInput } from "./UpdateReceiptRuleInput";
import { UpdateReceiptRuleOutput } from "./UpdateReceiptRuleOutput";
import { InvalidSnsTopicException } from "./InvalidSnsTopicException";
import { InvalidS3ConfigurationException } from "./InvalidS3ConfigurationException";
import { InvalidLambdaFunctionException } from "./InvalidLambdaFunctionException";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { RuleDoesNotExistException } from "./RuleDoesNotExistException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateReceiptRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateReceiptRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateReceiptRuleInput
  },
  output: {
    shape: UpdateReceiptRuleOutput,
    resultWrapper: "UpdateReceiptRuleResult"
  },
  errors: [
    {
      shape: InvalidSnsTopicException
    },
    {
      shape: InvalidS3ConfigurationException
    },
    {
      shape: InvalidLambdaFunctionException
    },
    {
      shape: RuleSetDoesNotExistException
    },
    {
      shape: RuleDoesNotExistException
    },
    {
      shape: LimitExceededException
    }
  ]
};
