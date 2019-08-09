import { ValidationException } from "./ValidationException";
import { ActionTypeNotFoundException } from "./ActionTypeNotFoundException";
export type PollForJobsExceptionsUnion =
  | ValidationException
  | ActionTypeNotFoundException;
