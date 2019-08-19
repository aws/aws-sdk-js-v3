import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
export type EnableTopicRuleExceptionsUnion =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | ConflictingResourceUpdateException;
