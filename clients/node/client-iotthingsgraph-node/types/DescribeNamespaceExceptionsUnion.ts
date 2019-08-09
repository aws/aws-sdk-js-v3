import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
export type DescribeNamespaceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | InternalFailureException
  | ThrottlingException;
