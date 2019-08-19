import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type ListTagsForResourceExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ResourceInUseException
  | ThrottlingException
  | InternalFailureException;
