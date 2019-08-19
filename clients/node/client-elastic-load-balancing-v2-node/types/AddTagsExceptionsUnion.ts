import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
export type AddTagsExceptionsUnion =
  | DuplicateTagKeysException
  | TooManyTagsException
  | LoadBalancerNotFoundException
  | TargetGroupNotFoundException;
