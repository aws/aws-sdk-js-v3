import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListJobsExceptionsUnion =
  | InvalidRequestException
  | InternalServiceException
  | InvalidNextTokenException;
