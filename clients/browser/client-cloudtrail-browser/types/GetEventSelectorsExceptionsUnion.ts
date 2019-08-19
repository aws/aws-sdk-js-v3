import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type GetEventSelectorsExceptionsUnion =
  | TrailNotFoundException
  | InvalidTrailNameException
  | UnsupportedOperationException
  | OperationNotPermittedException;
