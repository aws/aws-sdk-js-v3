import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { TaskNotFoundException } from "./TaskNotFoundException";
export type PollForTaskExceptionsUnion =
  | InternalServiceError
  | InvalidRequestException
  | TaskNotFoundException;
