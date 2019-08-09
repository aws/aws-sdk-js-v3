import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { RuleNotFoundException } from "./RuleNotFoundException";
export type DescribeTagsExceptionsUnion =
  | LoadBalancerNotFoundException
  | TargetGroupNotFoundException
  | ListenerNotFoundException
  | RuleNotFoundException;
