import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribePlacementExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException;
