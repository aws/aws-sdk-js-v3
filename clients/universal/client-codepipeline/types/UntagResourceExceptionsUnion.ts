import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidTagsException } from "./InvalidTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type UntagResourceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidTagsException
  | ConcurrentModificationException;
