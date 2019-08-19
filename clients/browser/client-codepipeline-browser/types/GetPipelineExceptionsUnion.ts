import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineVersionNotFoundException } from "./PipelineVersionNotFoundException";
export type GetPipelineExceptionsUnion =
  | ValidationException
  | PipelineNotFoundException
  | PipelineVersionNotFoundException;
