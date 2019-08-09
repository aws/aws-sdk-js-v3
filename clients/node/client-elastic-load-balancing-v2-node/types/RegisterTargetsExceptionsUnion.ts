import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { TooManyTargetsException } from "./TooManyTargetsException";
import { InvalidTargetException } from "./InvalidTargetException";
import { TooManyRegistrationsForTargetIdException } from "./TooManyRegistrationsForTargetIdException";
export type RegisterTargetsExceptionsUnion =
  | TargetGroupNotFoundException
  | TooManyTargetsException
  | InvalidTargetException
  | TooManyRegistrationsForTargetIdException;
