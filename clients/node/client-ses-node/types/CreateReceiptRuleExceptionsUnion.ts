import { InvalidSnsTopicException } from "./InvalidSnsTopicException";
import { InvalidS3ConfigurationException } from "./InvalidS3ConfigurationException";
import { InvalidLambdaFunctionException } from "./InvalidLambdaFunctionException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { RuleDoesNotExistException } from "./RuleDoesNotExistException";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateReceiptRuleExceptionsUnion =
  | InvalidSnsTopicException
  | InvalidS3ConfigurationException
  | InvalidLambdaFunctionException
  | AlreadyExistsException
  | RuleDoesNotExistException
  | RuleSetDoesNotExistException
  | LimitExceededException;
