import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
export type ListTagsForResourceExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ResourceNotFoundException
  | ThrottlingException;
