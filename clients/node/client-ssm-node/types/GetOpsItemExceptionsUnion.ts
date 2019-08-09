import { InternalServerError } from "./InternalServerError";
import { OpsItemNotFoundException } from "./OpsItemNotFoundException";
export type GetOpsItemExceptionsUnion =
  | InternalServerError
  | OpsItemNotFoundException;
