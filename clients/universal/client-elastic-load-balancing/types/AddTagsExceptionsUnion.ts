import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
export type AddTagsExceptionsUnion =
  | AccessPointNotFoundException
  | TooManyTagsException
  | DuplicateTagKeysException;
