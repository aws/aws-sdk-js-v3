import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
export type StartPipelineExecutionExceptionsUnion =
  | ValidationException
  | PipelineNotFoundException;
