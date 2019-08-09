import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type DescribeApplicationSnapshotExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | UnsupportedOperationException;
