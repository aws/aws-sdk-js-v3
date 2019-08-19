import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
export type DescribeSecretExceptionsUnion =
  | ResourceNotFoundException
  | InternalServiceError;
