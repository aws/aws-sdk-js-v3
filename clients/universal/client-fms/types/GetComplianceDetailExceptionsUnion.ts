import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type GetComplianceDetailExceptionsUnion =
  | ResourceNotFoundException
  | InternalErrorException;
