import { InvalidActivationId } from "./InvalidActivationId";
import { InvalidActivation } from "./InvalidActivation";
import { InternalServerError } from "./InternalServerError";
import { TooManyUpdates } from "./TooManyUpdates";
export type DeleteActivationExceptionsUnion =
  | InvalidActivationId
  | InvalidActivation
  | InternalServerError
  | TooManyUpdates;
