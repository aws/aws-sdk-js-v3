import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ListTagsLogGroupExceptionsUnion =
  | ResourceNotFoundException
  | ServiceUnavailableException;
