import { InternalServerError } from "./InternalServerError";
import { ParameterNotFound } from "./ParameterNotFound";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidKeyId } from "./InvalidKeyId";
export type GetParameterHistoryExceptionsUnion =
  | InternalServerError
  | ParameterNotFound
  | InvalidNextToken
  | InvalidKeyId;
