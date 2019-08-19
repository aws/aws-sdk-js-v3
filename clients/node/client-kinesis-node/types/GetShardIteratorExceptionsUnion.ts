import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
export type GetShardIteratorExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | ProvisionedThroughputExceededException;
