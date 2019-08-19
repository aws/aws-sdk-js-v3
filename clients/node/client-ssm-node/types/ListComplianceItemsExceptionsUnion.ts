import { InvalidResourceType } from "./InvalidResourceType";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
export type ListComplianceItemsExceptionsUnion =
  | InvalidResourceType
  | InvalidResourceId
  | InternalServerError
  | InvalidFilter
  | InvalidNextToken;
