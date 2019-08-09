import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { DashboardNotFoundError } from "./DashboardNotFoundError";
import { InternalServiceFault } from "./InternalServiceFault";
export type DeleteDashboardsExceptionsUnion =
  | InvalidParameterValueException
  | DashboardNotFoundError
  | InternalServiceFault;
