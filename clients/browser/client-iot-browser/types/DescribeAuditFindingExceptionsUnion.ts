import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type DescribeAuditFindingExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException;
