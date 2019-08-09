import { LimitExceededException } from "./LimitExceededException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
export type GetBackupPlanFromJSONExceptionsUnion =
  | LimitExceededException
  | InvalidParameterValueException
  | MissingParameterValueException
  | ServiceUnavailableException
  | InvalidRequestException;
