import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
export type EnableStageTransitionExceptionsUnion =
  | ValidationException
  | PipelineNotFoundException
  | StageNotFoundException;
