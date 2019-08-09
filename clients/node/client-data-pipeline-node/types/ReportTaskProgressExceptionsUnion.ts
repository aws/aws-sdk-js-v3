import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { TaskNotFoundException } from "./TaskNotFoundException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
export type ReportTaskProgressExceptionsUnion =
  | InternalServiceError
  | InvalidRequestException
  | TaskNotFoundException
  | PipelineNotFoundException
  | PipelineDeletedException;
