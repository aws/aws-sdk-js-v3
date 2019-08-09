import { InternalServerError } from "./InternalServerError";
import { ServiceSettingNotFound } from "./ServiceSettingNotFound";
import { TooManyUpdates } from "./TooManyUpdates";
export type UpdateServiceSettingExceptionsUnion =
  | InternalServerError
  | ServiceSettingNotFound
  | TooManyUpdates;
