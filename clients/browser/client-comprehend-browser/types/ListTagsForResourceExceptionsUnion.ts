import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type ListTagsForResourceExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | InternalServerException;
