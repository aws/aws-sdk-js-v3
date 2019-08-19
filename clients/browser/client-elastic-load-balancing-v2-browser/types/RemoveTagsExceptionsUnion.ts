import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { RuleNotFoundException } from "./RuleNotFoundException";
import { TooManyTagsException } from "./TooManyTagsException";
export type RemoveTagsExceptionsUnion =
  | LoadBalancerNotFoundException
  | TargetGroupNotFoundException
  | ListenerNotFoundException
  | RuleNotFoundException
  | TooManyTagsException;
