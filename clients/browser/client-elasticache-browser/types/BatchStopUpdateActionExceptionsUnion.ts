import { ServiceUpdateNotFoundFault } from "./ServiceUpdateNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
export type BatchStopUpdateActionExceptionsUnion =
  | ServiceUpdateNotFoundFault
  | InvalidParameterValueException;
