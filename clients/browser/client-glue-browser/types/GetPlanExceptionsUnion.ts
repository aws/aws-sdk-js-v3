import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetPlanExceptionsUnion =
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException;
