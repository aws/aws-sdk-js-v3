import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type CreatePipelineExceptionsUnion =
  | InternalServiceError
  | InvalidRequestException;
