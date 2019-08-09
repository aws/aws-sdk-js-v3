import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type PutRecordExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | ServiceUnavailableException;
