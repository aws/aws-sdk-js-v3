import { CreateReceiptRuleInput } from "./CreateReceiptRuleInput";
import { CreateReceiptRuleOutput } from "./CreateReceiptRuleOutput";
import { InvalidSnsTopicException } from "./InvalidSnsTopicException";
import { InvalidS3ConfigurationException } from "./InvalidS3ConfigurationException";
import { InvalidLambdaFunctionException } from "./InvalidLambdaFunctionException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { RuleDoesNotExistException } from "./RuleDoesNotExistException";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateReceiptRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateReceiptRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateReceiptRuleInput
  },
  output: {
    shape: CreateReceiptRuleOutput,
    resultWrapper: "CreateReceiptRuleResult"
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
      shape: AlreadyExistsException
    },
    {
      shape: RuleDoesNotExistException
    },
    {
      shape: RuleSetDoesNotExistException
    },
    {
      shape: LimitExceededException
    }
  ]
};
