import { SqlParseException } from "./SqlParseException";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
export type ReplaceTopicRuleExceptionsUnion =
  | SqlParseException
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | ConflictingResourceUpdateException;
