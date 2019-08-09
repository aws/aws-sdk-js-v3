import { NotFoundException } from "./NotFoundException";
import { TagOperationException } from "./TagOperationException";
import { TooManyTagsException } from "./TooManyTagsException";
import { TagPolicyException } from "./TagPolicyException";
export type TagResourceExceptionsUnion =
  | NotFoundException
  | TagOperationException
  | TooManyTagsException
  | TagPolicyException;
