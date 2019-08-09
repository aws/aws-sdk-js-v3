import { InternalServerError } from "./InternalServerError";
import { ServiceSettingNotFound } from "./ServiceSettingNotFound";
export type GetServiceSettingExceptionsUnion =
  | InternalServerError
  | ServiceSettingNotFound;
