import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
export type ListTagsExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidStateException;
