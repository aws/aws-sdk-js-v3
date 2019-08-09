import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
export type UntagResourceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | InternalFailureException;
