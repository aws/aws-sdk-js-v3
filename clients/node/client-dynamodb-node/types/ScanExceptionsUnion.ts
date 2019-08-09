import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RequestLimitExceeded } from "./RequestLimitExceeded";
import { InternalServerError } from "./InternalServerError";
export type ScanExceptionsUnion =
  | ProvisionedThroughputExceededException
  | ResourceNotFoundException
  | RequestLimitExceeded
  | InternalServerError;
