import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeDeploymentsExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
