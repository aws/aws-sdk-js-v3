import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UntagResourceExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException;
