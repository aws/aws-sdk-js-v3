import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
export type SearchEntitiesExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ThrottlingException;
