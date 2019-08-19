import { InternalServerError } from "./InternalServerError";
import { InvalidRequestException } from "./InvalidRequestException";
export type CancelStepsExceptionsUnion =
  | InternalServerError
  | InvalidRequestException;
