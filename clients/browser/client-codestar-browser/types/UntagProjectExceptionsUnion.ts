import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type UntagProjectExceptionsUnion =
  | ProjectNotFoundException
  | ValidationException
  | LimitExceededException
  | ConcurrentModificationException;
