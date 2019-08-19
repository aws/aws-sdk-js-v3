import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CancelExportTaskExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | InvalidOperationException
  | ServiceUnavailableException;
