import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListTagsForResourceExceptionsUnion =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException;
