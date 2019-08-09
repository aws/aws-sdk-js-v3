import { InvalidDocument } from "./InvalidDocument";
import { TargetNotConnected } from "./TargetNotConnected";
import { InternalServerError } from "./InternalServerError";
export type StartSessionExceptionsUnion =
  | InvalidDocument
  | TargetNotConnected
  | InternalServerError;
