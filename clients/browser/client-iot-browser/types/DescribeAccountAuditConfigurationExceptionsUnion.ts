import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type DescribeAccountAuditConfigurationExceptionsUnion =
  | ThrottlingException
  | InternalFailureException;
