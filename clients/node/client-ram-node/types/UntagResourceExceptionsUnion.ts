import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type UntagResourceExceptionsUnion =
  | InvalidParameterException
  | ServerInternalException
  | ServiceUnavailableException;
