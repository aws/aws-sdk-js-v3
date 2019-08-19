import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
export type RemoveTagsExceptionsUnion =
  | InternalServiceError
  | InvalidRequestException
  | PipelineNotFoundException
  | PipelineDeletedException;
