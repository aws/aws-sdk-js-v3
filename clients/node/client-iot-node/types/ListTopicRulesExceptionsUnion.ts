import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ListTopicRulesExceptionsUnion =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException;
