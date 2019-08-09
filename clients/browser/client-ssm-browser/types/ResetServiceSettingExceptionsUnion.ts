import { InternalServerError } from "./InternalServerError";
import { ServiceSettingNotFound } from "./ServiceSettingNotFound";
import { TooManyUpdates } from "./TooManyUpdates";
export type ResetServiceSettingExceptionsUnion =
  | InternalServerError
  | ServiceSettingNotFound
  | TooManyUpdates;
