import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type GetLogEventsExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceUnavailableException;
