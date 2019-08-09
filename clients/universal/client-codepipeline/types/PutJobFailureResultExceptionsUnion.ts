import { ValidationException } from "./ValidationException";
import { JobNotFoundException } from "./JobNotFoundException";
import { InvalidJobStateException } from "./InvalidJobStateException";
export type PutJobFailureResultExceptionsUnion =
  | ValidationException
  | JobNotFoundException
  | InvalidJobStateException;
