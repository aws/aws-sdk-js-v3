import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
export type GetNamespaceDeletionStatusExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ThrottlingException;
