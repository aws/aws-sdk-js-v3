import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type TagResourceExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException;
