import { ResourceInUseException } from "./ResourceInUseException";
import { InternalServerError } from "./InternalServerError";
export type DeletePatchBaselineExceptionsUnion =
  | ResourceInUseException
  | InternalServerError;
