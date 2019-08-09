import { InvalidInputException } from "./InvalidInputException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
export type CreateDataSourceFromRDSExceptionsUnion =
  | InvalidInputException
  | InternalServerException
  | IdempotentParameterMismatchException;
