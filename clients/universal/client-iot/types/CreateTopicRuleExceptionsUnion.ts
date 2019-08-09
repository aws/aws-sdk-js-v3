import { SqlParseException } from "./SqlParseException";
import { InternalException } from "./InternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
export type CreateTopicRuleExceptionsUnion =
  | SqlParseException
  | InternalException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ConflictingResourceUpdateException;
