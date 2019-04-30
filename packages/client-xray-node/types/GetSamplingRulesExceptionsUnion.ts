import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
export type GetSamplingRulesExceptionsUnion =
  | InvalidRequestException
  | ThrottledException;
