import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
export type DescribeTargetGroupsExceptionsUnion =
  | LoadBalancerNotFoundException
  | TargetGroupNotFoundException;
