import { UpdateReceiptRuleInput } from "../shapes/UpdateReceiptRuleInput";
import { UpdateReceiptRuleOutput } from "../shapes/UpdateReceiptRuleOutput";
import { InvalidSnsTopicException } from "../shapes/InvalidSnsTopicException";
import { InvalidS3ConfigurationException } from "../shapes/InvalidS3ConfigurationException";
import { InvalidLambdaFunctionException } from "../shapes/InvalidLambdaFunctionException";
import { RuleSetDoesNotExistException } from "../shapes/RuleSetDoesNotExistException";
import { RuleDoesNotExistException } from "../shapes/RuleDoesNotExistException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
