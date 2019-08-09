import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidFilterException } from "./InvalidFilterException";
import { InternalServerException } from "./InternalServerException";
export type ListDocumentClassificationJobsExceptionsUnion =
  | InvalidRequestException
  | TooManyRequestsException
  | InvalidFilterException
  | InternalServerException;
