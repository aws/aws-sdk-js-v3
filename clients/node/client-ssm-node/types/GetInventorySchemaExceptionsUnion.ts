import { InternalServerError } from "./InternalServerError";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidNextToken } from "./InvalidNextToken";
export type GetInventorySchemaExceptionsUnion =
  | InternalServerError
  | InvalidTypeNameException
  | InvalidNextToken;
