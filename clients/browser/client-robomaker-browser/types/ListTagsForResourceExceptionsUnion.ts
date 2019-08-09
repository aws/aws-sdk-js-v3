import { InternalServerException } from "./InternalServerException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
export type ListTagsForResourceExceptionsUnion =
  | InternalServerException
  | ResourceNotFoundException
  | InvalidParameterException
  | ThrottlingException;
