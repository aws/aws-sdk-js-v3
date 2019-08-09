import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceConflictException } from "./ResourceConflictException";
export type CreateProjectExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceConflictException;
