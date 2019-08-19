import { ActionTypeNotFoundException } from "./ActionTypeNotFoundException";
import { ValidationException } from "./ValidationException";
export type PollForThirdPartyJobsExceptionsUnion =
  | ActionTypeNotFoundException
  | ValidationException;
