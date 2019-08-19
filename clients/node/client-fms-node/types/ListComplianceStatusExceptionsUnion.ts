import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type ListComplianceStatusExceptionsUnion =
  | ResourceNotFoundException
  | InternalErrorException;
