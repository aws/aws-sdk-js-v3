import { ServiceUpdateNotFoundFault } from "./ServiceUpdateNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
export type BatchApplyUpdateActionExceptionsUnion =
  | ServiceUpdateNotFoundFault
  | InvalidParameterValueException;
