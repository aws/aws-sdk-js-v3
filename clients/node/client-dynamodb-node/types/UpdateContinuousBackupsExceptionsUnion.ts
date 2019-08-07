import { TableNotFoundException } from "./TableNotFoundException";
import { ContinuousBackupsUnavailableException } from "./ContinuousBackupsUnavailableException";
import { InternalServerError } from "./InternalServerError";
export type UpdateContinuousBackupsExceptionsUnion =
  | TableNotFoundException
  | ContinuousBackupsUnavailableException
  | InternalServerError;
