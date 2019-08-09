import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
export type DisableTopicRuleExceptionsUnion =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | ConflictingResourceUpdateException;
