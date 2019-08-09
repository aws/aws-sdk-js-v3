import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { InvalidTargetException } from "./InvalidTargetException";
export type DeregisterTargetsExceptionsUnion =
  | TargetGroupNotFoundException
  | InvalidTargetException;
