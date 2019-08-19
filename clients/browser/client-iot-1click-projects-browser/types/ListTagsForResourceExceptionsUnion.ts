import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListTagsForResourceExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException;
