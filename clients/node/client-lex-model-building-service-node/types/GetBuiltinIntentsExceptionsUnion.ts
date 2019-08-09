import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
export type GetBuiltinIntentsExceptionsUnion =
  | LimitExceededException
  | InternalFailureException
  | BadRequestException;
