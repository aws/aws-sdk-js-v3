import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
export type ListInventoryEntriesExceptionsUnion =
  | InternalServerError
  | InvalidInstanceId
  | InvalidTypeNameException
  | InvalidFilter
  | InvalidNextToken;
