import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
export type GetTopicRuleExceptionsUnion =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException;
