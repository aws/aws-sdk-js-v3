import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { PipelineExecutionNotFoundException } from "./PipelineExecutionNotFoundException";
export type ListActionExecutionsExceptionsUnion =
  | ValidationException
  | PipelineNotFoundException
  | InvalidNextTokenException
  | PipelineExecutionNotFoundException;
