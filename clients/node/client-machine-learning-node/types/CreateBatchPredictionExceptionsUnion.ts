import { InvalidInputException } from "./InvalidInputException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
export type CreateBatchPredictionExceptionsUnion =
  | InvalidInputException
  | InternalServerException
  | IdempotentParameterMismatchException;
