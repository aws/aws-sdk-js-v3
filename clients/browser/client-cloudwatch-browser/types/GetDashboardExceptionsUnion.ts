import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { DashboardNotFoundError } from "./DashboardNotFoundError";
import { InternalServiceFault } from "./InternalServiceFault";
export type GetDashboardExceptionsUnion =
  | InvalidParameterValueException
  | DashboardNotFoundError
  | InternalServiceFault;
