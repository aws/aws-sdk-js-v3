import { InvalidTargetException } from "./InvalidTargetException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { HealthUnavailableException } from "./HealthUnavailableException";
export type DescribeTargetHealthExceptionsUnion =
  | InvalidTargetException
  | TargetGroupNotFoundException
  | HealthUnavailableException;
