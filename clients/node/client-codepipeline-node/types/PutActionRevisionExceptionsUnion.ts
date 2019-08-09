import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
import { ActionNotFoundException } from "./ActionNotFoundException";
import { ValidationException } from "./ValidationException";
export type PutActionRevisionExceptionsUnion =
  | PipelineNotFoundException
  | StageNotFoundException
  | ActionNotFoundException
  | ValidationException;
