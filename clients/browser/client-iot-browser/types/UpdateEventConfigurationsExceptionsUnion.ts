import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
export type UpdateEventConfigurationsExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ThrottlingException;
