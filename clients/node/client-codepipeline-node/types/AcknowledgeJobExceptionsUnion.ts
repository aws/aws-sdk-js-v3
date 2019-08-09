import { ValidationException } from "./ValidationException";
import { InvalidNonceException } from "./InvalidNonceException";
import { JobNotFoundException } from "./JobNotFoundException";
export type AcknowledgeJobExceptionsUnion =
  | ValidationException
  | InvalidNonceException
  | JobNotFoundException;
