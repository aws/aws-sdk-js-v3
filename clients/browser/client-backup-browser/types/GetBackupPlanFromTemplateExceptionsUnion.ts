import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type GetBackupPlanFromTemplateExceptionsUnion =
  | InvalidParameterValueException
  | MissingParameterValueException
  | ServiceUnavailableException
  | ResourceNotFoundException;
