import { InternalServerError } from "./InternalServerError";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidInventoryGroupException } from "./InvalidInventoryGroupException";
import { InvalidNextToken } from "./InvalidNextToken";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidAggregatorException } from "./InvalidAggregatorException";
import { InvalidResultAttributeException } from "./InvalidResultAttributeException";
export type GetInventoryExceptionsUnion =
  | InternalServerError
  | InvalidFilter
  | InvalidInventoryGroupException
  | InvalidNextToken
  | InvalidTypeNameException
  | InvalidAggregatorException
  | InvalidResultAttributeException;
