import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineExecutionNotFoundException } from "./PipelineExecutionNotFoundException";
export type GetPipelineExecutionExceptionsUnion =
  | ValidationException
  | PipelineNotFoundException
  | PipelineExecutionNotFoundException;
