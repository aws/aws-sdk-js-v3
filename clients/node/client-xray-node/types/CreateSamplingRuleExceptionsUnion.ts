import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
import { RuleLimitExceededException } from "./RuleLimitExceededException";
export type CreateSamplingRuleExceptionsUnion =
  | InvalidRequestException
  | ThrottledException
  | RuleLimitExceededException;
