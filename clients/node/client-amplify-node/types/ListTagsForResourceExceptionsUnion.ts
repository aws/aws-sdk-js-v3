import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListTagsForResourceExceptionsUnion =
  | InternalFailureException
  | BadRequestException
  | ResourceNotFoundException;
