import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
export type ExecuteProvisionedProductPlanExceptionsUnion =
  | InvalidParametersException
  | ResourceNotFoundException
  | InvalidStateException;
