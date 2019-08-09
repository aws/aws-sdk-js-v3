import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type ListPipelinesExceptionsUnion =
  | InternalServiceError
  | InvalidRequestException;
