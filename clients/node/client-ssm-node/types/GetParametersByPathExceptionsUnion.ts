import { InternalServerError } from "./InternalServerError";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidFilterOption } from "./InvalidFilterOption";
import { InvalidFilterValue } from "./InvalidFilterValue";
import { InvalidKeyId } from "./InvalidKeyId";
import { InvalidNextToken } from "./InvalidNextToken";
export type GetParametersByPathExceptionsUnion =
  | InternalServerError
  | InvalidFilterKey
  | InvalidFilterOption
  | InvalidFilterValue
  | InvalidKeyId
  | InvalidNextToken;
