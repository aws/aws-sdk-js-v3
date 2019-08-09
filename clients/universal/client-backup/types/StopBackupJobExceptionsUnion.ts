import { MissingParameterValueException } from "./MissingParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type StopBackupJobExceptionsUnion =
  | MissingParameterValueException
  | ResourceNotFoundException
  | InvalidParameterValueException
  | InvalidRequestException
  | ServiceUnavailableException;
