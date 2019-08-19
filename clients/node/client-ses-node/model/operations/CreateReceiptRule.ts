import { CreateReceiptRuleInput } from "../shapes/CreateReceiptRuleInput";
import { CreateReceiptRuleOutput } from "../shapes/CreateReceiptRuleOutput";
import { InvalidSnsTopicException } from "../shapes/InvalidSnsTopicException";
import { InvalidS3ConfigurationException } from "../shapes/InvalidS3ConfigurationException";
import { InvalidLambdaFunctionException } from "../shapes/InvalidLambdaFunctionException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { RuleDoesNotExistException } from "../shapes/RuleDoesNotExistException";
import { RuleSetDoesNotExistException } from "../shapes/RuleSetDoesNotExistException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
