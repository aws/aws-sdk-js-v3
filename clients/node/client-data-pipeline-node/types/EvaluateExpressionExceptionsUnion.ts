import { InternalServiceError } from "./InternalServiceError";
import { TaskNotFoundException } from "./TaskNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
export type EvaluateExpressionExceptionsUnion =
  | InternalServiceError
  | TaskNotFoundException
  | InvalidRequestException
  | PipelineNotFoundException
  | PipelineDeletedException;
