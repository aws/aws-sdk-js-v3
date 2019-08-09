import { DashboardInvalidInputError } from "./DashboardInvalidInputError";
import { InternalServiceFault } from "./InternalServiceFault";
export type PutDashboardExceptionsUnion =
  | DashboardInvalidInputError
  | InternalServiceFault;
