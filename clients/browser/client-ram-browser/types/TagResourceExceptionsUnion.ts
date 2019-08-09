import { InvalidParameterException } from "./InvalidParameterException";
import { MalformedArnException } from "./MalformedArnException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { ResourceArnNotFoundException } from "./ResourceArnNotFoundException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type TagResourceExceptionsUnion =
  | InvalidParameterException
  | MalformedArnException
  | TagLimitExceededException
  | ResourceArnNotFoundException
  | ServerInternalException
  | ServiceUnavailableException;
