import { InvalidSnsTopicException } from "./InvalidSnsTopicException";
import { InvalidS3ConfigurationException } from "./InvalidS3ConfigurationException";
import { InvalidLambdaFunctionException } from "./InvalidLambdaFunctionException";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { RuleDoesNotExistException } from "./RuleDoesNotExistException";
import { LimitExceededException } from "./LimitExceededException";
export type UpdateReceiptRuleExceptionsUnion =
  | InvalidSnsTopicException
  | InvalidS3ConfigurationException
  | InvalidLambdaFunctionException
  | RuleSetDoesNotExistException
  | RuleDoesNotExistException
  | LimitExceededException;
