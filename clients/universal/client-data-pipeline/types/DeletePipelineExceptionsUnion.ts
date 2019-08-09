import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type DeletePipelineExceptionsUnion =
  | PipelineNotFoundException
  | InternalServiceError
  | InvalidRequestException;
