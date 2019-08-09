import { InternalServerError } from "./InternalServerError";
import { InvalidKeyId } from "./InvalidKeyId";
import { ParameterNotFound } from "./ParameterNotFound";
import { ParameterVersionNotFound } from "./ParameterVersionNotFound";
export type GetParameterExceptionsUnion =
  | InternalServerError
  | InvalidKeyId
  | ParameterNotFound
  | ParameterVersionNotFound;
