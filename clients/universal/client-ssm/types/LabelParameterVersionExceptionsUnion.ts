import { InternalServerError } from "./InternalServerError";
import { TooManyUpdates } from "./TooManyUpdates";
import { ParameterNotFound } from "./ParameterNotFound";
import { ParameterVersionNotFound } from "./ParameterVersionNotFound";
import { ParameterVersionLabelLimitExceeded } from "./ParameterVersionLabelLimitExceeded";
export type LabelParameterVersionExceptionsUnion =
  | InternalServerError
  | TooManyUpdates
  | ParameterNotFound
  | ParameterVersionNotFound
  | ParameterVersionLabelLimitExceeded;
