import { ValidationException } from "./ValidationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeletePipelineExceptionsUnion =
  | ValidationException
  | ConcurrentModificationException;
