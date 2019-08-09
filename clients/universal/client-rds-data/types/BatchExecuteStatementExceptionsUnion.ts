import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
import { StatementTimeoutException } from "./StatementTimeoutException";
export type BatchExecuteStatementExceptionsUnion =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableError
  | StatementTimeoutException;
