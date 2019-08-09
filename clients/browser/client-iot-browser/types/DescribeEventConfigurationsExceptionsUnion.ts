import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
export type DescribeEventConfigurationsExceptionsUnion =
  | InternalFailureException
  | ThrottlingException;
