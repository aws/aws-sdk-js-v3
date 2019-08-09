import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
export type GetPipelineStateExceptionsUnion =
  | ValidationException
  | PipelineNotFoundException;
