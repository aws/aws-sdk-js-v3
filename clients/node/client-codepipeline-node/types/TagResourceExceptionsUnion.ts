import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidTagsException } from "./InvalidTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type TagResourceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException
  | InvalidArnException
  | TooManyTagsException
  | InvalidTagsException
  | ConcurrentModificationException;
