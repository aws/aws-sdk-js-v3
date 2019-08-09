import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type ListPipelineExecutionsExceptionsUnion =
  | ValidationException
  | PipelineNotFoundException
  | InvalidNextTokenException;
