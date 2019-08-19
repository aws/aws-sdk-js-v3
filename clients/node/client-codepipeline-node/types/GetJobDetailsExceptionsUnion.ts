import { ValidationException } from "./ValidationException";
import { JobNotFoundException } from "./JobNotFoundException";
export type GetJobDetailsExceptionsUnion =
  | ValidationException
  | JobNotFoundException;
