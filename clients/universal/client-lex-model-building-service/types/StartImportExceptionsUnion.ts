import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
export type StartImportExceptionsUnion =
  | LimitExceededException
  | InternalFailureException
  | BadRequestException;
