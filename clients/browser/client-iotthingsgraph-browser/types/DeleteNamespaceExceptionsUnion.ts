import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
export type DeleteNamespaceExceptionsUnion =
  | InternalFailureException
  | ThrottlingException;
