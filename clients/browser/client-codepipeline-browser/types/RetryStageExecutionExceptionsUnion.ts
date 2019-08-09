import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
import { StageNotRetryableException } from "./StageNotRetryableException";
import { NotLatestPipelineExecutionException } from "./NotLatestPipelineExecutionException";
export type RetryStageExecutionExceptionsUnion =
  | ValidationException
  | PipelineNotFoundException
  | StageNotFoundException
  | StageNotRetryableException
  | NotLatestPipelineExecutionException;
